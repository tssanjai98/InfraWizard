
import boto3
import json
import re
from botocore.exceptions import ClientError

bedrock_runtime = boto3.client('bedrock-runtime', region_name = 'us-east-1')

functional_requirements = (
    "User Authentication: Users must be able to create accounts, log in, and recover passwords securely. "
    "Subscription Management: Users should be able to subscribe, upgrade, downgrade, and cancel plans. "
    "Content Search and Filtering: Users can search for content and filter results based on genre, language, etc. "
    "Video Streaming: The platform should allow users to stream video content in different quality levels (SD, HD, 4K). "
    "User Profiles: Support multiple user profiles per account, each with personalized recommendations. "
    "Content Download: Allow users to download content for offline viewing."
)

non_functional_requirements = (
    "Scalability: The system should handle millions of concurrent users with auto-scaling capabilities."
"Performance: Low-latency streaming and minimal buffering, with fast content search and recommendations."
"Security: Ensure encryption of sensitive user data (e.g., payments, personal info) and secure user authentication."
"Availability: Ensure 99.9% uptime across regions using redundancy and backup systems."
)

#prompt = "consider this function requirements :"+functional_requirements+". And this non functional requirements: "+non_functional_requirements+". create me just list of aws components names that will be using, and logical flow between them, and find the total avg cost for whole application for aws for a month. Ensure that the output is always formatted as follows: - aws-resources: [List of AWS components consists only names] - logical-flow: [Describe the logical flow step by step] - monthly_average_cost: [Estimated average monthly cost in USD] Note: Do not include monitoring and logging tools in the AWS components list."

# prompt = "consider this function requirements :"+functional_requirements+". And this non functional requirements: "+non_functional_requirements+". Based on the above requirements, provide: A list of AWS resources used in the solution, formatted as a list (e.g., [S3, EC2, RDS]). - logical-flow: [Describe the logical flow step by step]. The estimated monthly average cost for the whole application . Note: Do not include monitoring and logging tools in the AWS components list."

# Based on the above requirements, provide: A list of AWS resources used in the solution, formatted as a list (e.g., [S3, EC2, RDS]). A detailed logical flow of the system in a step-by-step manner, explaining how each AWS service is used. The estimated monthly average cost for the whole application in the format "$X - $Y"


prompt = "consider this function requirements :"+functional_requirements+". Based on the above requirements, I need you to provide outputs strictly in a specified format every time. Below is the format and example. Your task is to ensure that the output always matches this format, without deviation, even if the content changes. aws-resources: A list of AWS services used upto 10, formatted as - aws-resources: [Service1, Service2, …]. logical-flow: A numbered list describing the logical flow of the system, formatted as - logical-flow: followed by numbered steps. monthly_average_cost: The estimated monthly average cost of the system, formatted as - monthly_average_cost:"

# print(prompt)
# prompt = 'Give me aws components the can be used for netflix architecture'

# prompt = 'What is the capital of India'
try:
    body = {
        "prompt": prompt,
        "temperature": 0.5,
        "top_p": 0.9,
        "max_gen_len": 512,
    }

    response = bedrock_runtime.invoke_model(
        modelId="meta.llama3-70b-instruct-v1:0", body=json.dumps(body)
    )

    response_body = json.loads(response["body"].read())
    completion = response_body["generation"]
    
    print("Above llm")

    # print(completion)
    
    aws_resources = re.search(r'aws-resources:\s*\[(.*?)\]', completion)
    aws_resources_list = aws_resources.group(1).split(", ") if aws_resources else []
    
    # Extract logical-flow (all steps starting with a digit and period)
    logical_flow = re.findall(r'\d+\.\s(.*)', completion)
    logical_flow_steps = logical_flow if logical_flow else []
    
    # Extract monthly_average_cost
    monthly_cost = re.search(r'monthly_average_cost:\s*\$(.*?)\n', completion)
    monthly_average_cost = monthly_cost.group(1) if monthly_cost else None
    
    # Store parameters
    parsed_data = {
        'aws_resources': aws_resources_list,
        'logical_flow': logical_flow_steps,
        'monthly_average_cost': monthly_average_cost
    }
    
    # Output parsed data
    print(parsed_data)

except ClientError as e:
    print(f"Couldn't invoke Llama 3: {e}")