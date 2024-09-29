import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const REGION = "us-east-1"; // e.g., 'us-west-2'
const ACCESS_KEY_ID = "AKIAXAJL2PLSO2GPW3WI";
const SECRET_ACCESS_KEY = "TNeuK1X+R54gOwsHP+fIn8GWZcH8VCKiaS5eRNFt";

const client = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

export const docClient = DynamoDBDocumentClient.from(client);
