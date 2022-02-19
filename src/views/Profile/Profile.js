import React from "react";
import {useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import Loading from "../../components/Loading/Loading";
import {Card, Col} from "reactstrap";
import style from "./Profile.module.css";

export const ProfileComponent = () => {
    const { user } = useAuth0();

    return (
        <div className="container-fluid">
            <div className="container">
                <h1 className="m-5">Profilo</h1>
                <div className="col-7 mx-auto">
                    <Card className={style.profileCard+" mb-5"}>
                        <div className="row m-5 text-center">
                            <h2>{user.name}</h2>
                            <Col className="mx-auto mt-3" md={3}>
                                <img
                                    src={user.picture}
                                    alt="Profile"
                                    className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                                />
                            </Col>
                        </div>
                        <div className="col-7 mx-auto">
                            <div className="row mb-3">
                                <h3><strong>Nome:</strong> {user.name}</h3>
                            </div>
                            <div className="row mb-3">
                                <h3><strong>Username:</strong> {user.nickname}</h3>
                            </div>
                            <div className="row mb-5">
                                <h3><strong>Email:</strong> {user.email}</h3>
                            </div>
                        </div>


                    </Card>

                </div>
            </div>

        </div>
    )

}

export default withAuthenticationRequired(ProfileComponent, {
    onRedirecting: () => <Loading />,
});
