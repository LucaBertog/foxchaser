/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../../interfaces/state.interface';

// interface ChatState {
//   selectedUser: string | null;
//   chatMessages: Array<chatMessage> | null;
// }

const initialState = {
  selectedUser: '',
  chatMessages: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectedUser(state, action: PayloadAction<string>) {
      state.selectedUser = action.payload;
    },
    // addChatMessage(state, action: PayloadAction<chatMessage>) {
    //   const newState = { ...state };

    //   if (newState.chatMessages) {
    //     newState.chatMessages = [...newState.chatMessages, action.payload];
    //   } else {
    //     newState.chatMessages = [action.payload];
    //   }

    //   return newState;
    // },
    // updateChatMessage(state, action: PayloadAction<{
    //   userID: number,
    //   newMessages: MessageResponse[],
    //   prevChatMessages: chatMessage[]
    // }>) {
    //   const newState = { ...state };
    //   if (state.chatMessages) {
    //     const chatUserID = action.payload.userID;
    //     const currentChat = action.payload.prevChatMessages.find(
    //       (chatMessage) => chatMessage[action.payload.userID],
    //     );

    //     const newChatMessages = [...action.payload.prevChatMessages];

    //     if (currentChat) {
    //       const indexPrevChatMessage = newChatMessages.findIndex(
    //         (chatMessages) => chatMessages[chatUserID],
    //       );
    //       newChatMessages.splice(indexPrevChatMessage, 1);
    //       newChatMessages.push({ [chatUserID]: action.payload.newMessages });
    //       newState.chatMessages = newChatMessages;
    //     }
    //   }
    //   return newState;
    // },
  },
});

export const selectUserSelected = (state: State) => state.chat.selectedUser;
// export const selectChatMessages = (state: State) => state.chat.chatMessages;
export const { selectedUser } = chatSlice.actions;
export default chatSlice.reducer;
