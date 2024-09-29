# GenAI-Based Application Architecture Designer

## Problem Statement

Designing scalable, secure, and efficient cloud application architectures using AWS resources can be a daunting task, particularly for users who lack in-depth technical knowledge, such as product managers and non-technical stakeholders.

This project addresses that challenge by creating an **application using Generative AI (GenAI)** that assists **naive users** and **product managers** in designing the **high-level architecture** of an application utilizing **AWS resources**. The tool provides insights into the application's architecture complexity, service requirements, and associated costs.

## Objective

The main objective of this project is to:
- **Simplify the cloud architecture design** process for users with minimal technical expertise.
- **Leverage AWS resources** to generate a scalable, efficient, and secure architecture based on the input requirements.
- **Provide Terraform scripts** for engineers to use Infrastructure as Code (IaC) to quickly deploy the suggested architecture.
- **Utilize AWS Bedrock with LLaMA** as the GenAI to provide intelligent and tailored architecture designs based on user-provided inputs.

## Solution Overview

This application uses **AWS Bedrock with LLaMA**, a Generative AI service, to analyze user inputs and design an application architecture that fits their needs using **AWS services**. The AI selects appropriate components such as compute, storage, networking, and security, and generates a high-level architecture that includes AWS resources, a logical flow of components, and cost estimations.

### Key Features:
- **Automated AWS Architecture Design:** Generates detailed architecture diagrams using appropriate AWS services.
- **AI-Powered via AWS Bedrock with LLaMA:** GenAI intelligently selects AWS components based on user input.
- **User-Friendly:** Aimed at non-technical users like product managers to help them visualize the high-level architecture.
- **Terraform Scripts for IaC:** Provides Terraform scripts to help engineers implement the designed architecture efficiently.
- **Cost Estimation:** Offers an estimated cost breakdown for running the application using AWS resources.

## Challenges Faced

1. **Lucidchart Developer Account Access:** We faced challenges in obtaining a developer account for Lucidchart, which hindered our ability to automatically generate system architecture diagrams.
2. **API Limitations:** Some AWS Bedrock services have API limits that slowed down the architecture generation process during high-traffic times.
3. **Cost Optimization:** Balancing resource selection with cost efficiency was a challenge when dealing with GenAI model suggestions.
4. **Terraform Script Generation:** Handling dynamic and complex architectures required constant iteration on Terraform script generation logic.

## AWS Services Used

- **Compute:** EC2,  Lambda
- **Storage:** S3
- **Networking:** VPC, Route 53, CloudFront
- **Security:** IAM
- **Database:** DynamoDB
- **GenAI Engine:** AWS Bedrock with LLaMA to generate application architecture

## Tech Stack

- **AWS Bedrock with LLaMA:** Used for generating application architecture through GenAI.
- **Terraform:** Used to create Infrastructure as Code (IaC) to deploy AWS resources.
- **Selenium:** Integrated for interacting with Lucidchart to construct system architecture diagrams.
- **Python:** Core programming language used for system logic, integrating with AWS APIs and Selenium.

## Terraform Integration

For technical users such as cloud engineers and developers, this project includes **Terraform scripts** for deploying the designed architecture on AWS. The Terraform scripts serve as **Infrastructure as Code (IaC)**, making the deployment process faster, more efficient, and repeatable.

### Terraform Features:
- Automates the creation and management of AWS resources.
- Ensures consistency across environments by utilizing Infrastructure as Code.
- Makes it easy for engineers to adapt and scale the generated architecture.

## Usage

1. Users provide basic information about their application's goals and required features.
2. The **GenAI-powered engine** (AWS Bedrock with LLaMA) processes the input and designs a **high-level architecture** using AWS services.
3. Users receive an architecture diagram, a description of the AWS resources used, and an **estimated monthly cost** for running the application.
4. The system also provides **Terraform scripts** that engineers can use to deploy the designed architecture as **Infrastructure as Code (IaC)**.

## Conclusion

This AI-powered tool, driven by **AWS Bedrock with LLaMA**, simplifies cloud architecture design and empowers product managers and non-technical users to visualize the complexity of their applications on AWS. With added support for **Terraform-based Infrastructure as Code**, engineers can quickly deploy these AI-generated architectures, making the entire process efficient and scalable.
