import api from '@/api/api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMe = createAsyncThunk(
  'user/fetchMe',
  async (_, thunkAPI) => {
    try {
      const res = await api.get('/user/me')

      if (!res.data) {
        throw new Error('Не авторизован')
      }

      return res.data
    } catch (err: string | any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data:  null as UserT | null,
    loading: false,
    error: null as string | null,
    isAuth: false
  },
  reducers: {
    logout: (state) => {
      state.data = null as UserT | null
      state.isAuth = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMe.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload as UserT
        state.isAuth = true
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.loading = false
        state.error = (action.payload as string) || null
        state.isAuth = false
      })
  }
})

export const { logout } = userSlice.actions
export default userSlice.reducer