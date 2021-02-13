import React from "react";
import AddPost from "./Post/AddPost";
import HomePage from "./Post/HomePage";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NotFound from "../NotFound";
import { userDataType } from "./ProfileInfo/ProfileInfoType";
import {Switch, Route} from "react-router-dom";

function Content({userData}) {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/add" component={AddPost}/>
      <Route exact path="/profile"
             render={() =>
                 <ProfileInfo userData={userData}/>}/>
      <Route component={NotFound} />
    </Switch>
  );
}

Content.propTypes = {
  userData: userDataType,
};

export default Content;
