import { docClient } from './awsConfig';
import { GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

export const addUser = async (user) => {
  try {
    const command = new PutCommand({
      TableName: 'Users',
      Item: user,
    });
    await docClient.send(command);
    console.log('User added:', user);
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

export const getUser = async (username) => {
  try {
    const command = new GetCommand({
      TableName: 'Users',
      Key: {
        username: username, // Assuming the primary key is 'email'
      },
    });
    const { Item } = await docClient.send(command);
    return Item;
  } catch (error) {
    console.error('Error retrieving user:', error);
    return null;
  }
};
