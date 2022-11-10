import { Routes, Route } from 'react-router-dom';
import { BookHotel } from '../pages/BookHotel';

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/hotels/:id' element={<BookHotel />} />
        </Routes>
    )
}
