import { Message } from '@/interfaces/Messages';
import { createApiClient } from './AuthApi';



export const getAllMessages = async (accessToken: string): Promise<Message[]> => {
    
  try {
          const apiClient = createApiClient(accessToken);
          const response = await apiClient.get('/all-messages');
          return response.data.messagesResponse;

      }
      catch (err) {
          console.log("Error in updating wallet please try again", err)
          throw new Error("Error Updating wallet"+err);
      }
}