import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Error, Landing, Register, ProtectedRoute } from "./pages";
import {
  AddJob,
  AllJob,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute> }>
              <Route index element={<Stats />} />
              <Route path="all-jobs" element={<AllJob />} />
              <Route path="add-job" element={<AddJob />} />
              <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
