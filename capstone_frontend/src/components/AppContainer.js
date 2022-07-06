import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";

import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NewsFeed from "./NewsFeed";
import NewsFeedContent from "./NewsFeedContent";
import Friends from "./Friends";
import Profile from "./Profile";
import MyProfile from "./MyProfile";
import SearchFriends from "./SearchFriends";
import UnauthorizedPage from "./UnauthorizedPage";

function AppContainer() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/newsfeed" element={<NewsFeed />}>
          <Route path="" element={<NewsFeedContent />} />
          <Route path="friends" element={<Friends />} />
          <Route path="profile" element={<Profile />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="seacrhfriends" element={<SearchFriends />} />
        </Route>
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<NotFoundPage />} />        
      </Routes>
    </HashRouter>
  );
}

export default AppContainer;