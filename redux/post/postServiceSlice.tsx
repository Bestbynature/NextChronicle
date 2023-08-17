import { createSlice, 
  createAsyncThunk, 
  isRejectedWithValue,
  PayloadAction
 } from '@reduxjs/toolkit';
//  import type { RootState } from '../store';
import axios from 'axios';

const url = process.env.REACT_APP_API_ENDPOINT;

if (!url) {
  throw new Error('REACT_APP_API_ENDPOINT is not defined.');
}

export const fetchposts = createAsyncThunk('posts/fetchposts',   async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error: any) {
      return isRejectedWithValue(error.response.data);
    }
  }
);

export const postClient = createAsyncThunk('posts/postClient', async (formData: poststate) => {
  try {
    const response = await axios.post(url, formData);
    return response.data;
  } catch (error: any) {
    return isRejectedWithValue(error.response.data);
  }
});

export const deleteClient = createAsyncThunk('posts/deleteClient', async (index: number) => {
  try {
    const response = await axios.delete(`${url}/${index}`);
    return response.data;
  } catch (error: any) {
    return isRejectedWithValue(error.response.data);
  }
});

export const updateClient = createAsyncThunk('posts/updateClient', async (formData: poststate) => {
  try {
    const response = await axios.put(`${url}/${formData.id}`, formData);
    return response.data;
  } catch (error: any) {
    return isRejectedWithValue(error.response.data);
  }
});

export interface poststate {
  guid: string;
  id: number;
  isActiveC: boolean;
  firstName: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
  company: string;
}

// export interface VendorState {
//   _id?: string,
//   id: number;
//   isActive: boolean;
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   specialisation: string;
//   qualification: string;
// }

interface AppState {
  posts: poststate[];
  client: poststate;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  company: string;
  postcode: string;
  isActiveC: boolean;
  id: number;
  guid: string;
  _id: string;
  open: boolean;
  isEdit: boolean;
}

const initialState: AppState = {
  posts: [],
  client: {} as poststate,
  status: 'idle',
  error: null,
  open: false,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  company: '',
  postcode: '',
  id: 0,
  guid: '',
  _id: '',
  isActiveC: true,
  isEdit: false
};

const postserviceSlice = createSlice({
  name: 'postservice',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      if(!action.payload){
        return { ...state, open: action.payload, isEdit: false, firstName: '', lastName: '', email: '', phone: '', address: '', company: '', postcode: '' };
      }else{
        return { ...state, open: action.payload };
      }
  },
  setId: (state, action: PayloadAction<number>) => {
    return { ...state, id: action.payload };
  },
  setGuid: (state, action: PayloadAction<string>) => {
    return { ...state, guid: action.payload };
  },
  setUid: (state, action: PayloadAction<string>) => {
    return { ...state, _id: action.payload };
  },
  setIsEdit: (state, action: PayloadAction<boolean>) => {
    return { ...state, isEdit: action.payload };
  },
  setFirstName: (state, action: PayloadAction<string>) => {
      return { ...state, firstName: action.payload };
  },
  setLastName: (state, action: PayloadAction<string>) => {
      return { ...state, lastName: action.payload };
  },
  setEmail: (state, action: PayloadAction<string>) => {
      return { ...state, email: action.payload };
  },
  setPhone: (state, action: PayloadAction<string>) => {
      return { ...state, phone: action.payload };
  },
  setAddress: (state, action: PayloadAction<string>) => {
      return { ...state, address: action.payload };
  },
  setCompany: (state, action: PayloadAction<string>) => {
      return { ...state, company: action.payload };
  },
  setPostCode: (state, action: PayloadAction<string>) => {
    return { ...state, postcode: action.payload };
  },
  deleteClient2: (state, action: PayloadAction<number>) => {
    return { ...state, posts: state.posts.filter(client => client.id !== action.payload) };
  },
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchposts.pending, (state: AppState) => {
        return { ...state, status: 'loading' };
      })
      .addCase(fetchposts.fulfilled, (state: AppState, action: PayloadAction<poststate[]>) => {
        return { ...state, status: 'succeeded', posts: action.payload };
      })
      .addCase(postClient.pending, (state: AppState) => {
        return { ...state, status: 'loading' };
      })
      .addCase(postClient.fulfilled, (state: AppState, action: PayloadAction<poststate>) => {
        return { ...state, status: 'succeeded', posts: [...state.posts, action.payload] };
      })
      .addCase(deleteClient.pending, (state: AppState) => {
        return { ...state, status: 'loading' };
      })
      .addCase(deleteClient.fulfilled, (state: AppState ) => {
        return { ...state, status: 'succeeded'};
      })
   } 
});

export const { setFirstName, setLastName, setEmail, 
  setPhone, setAddress, setCompany, setPostCode,
   setOpen, deleteClient2, setIsEdit, setId, setGuid, setUid } = postserviceSlice.actions;
export default postserviceSlice.reducer;