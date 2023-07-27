import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const NavigationItems = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout()
      .then(() => {
        toast("You have been logged out", {
          position: "top-center",
          type: "warning",
          duration: 4000,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
        });
      });
  };
  return (
    <>
      <li className="group">
        <div className=" group-hover:text-yellow-100 !important hover:underline">
          <Link to={"/"}>Home</Link>
        </div>
      </li>
      <li className="group">
        <div className=" group-hover:text-yellow-100 hover:underline">
          <Link to={"/instructors"}>Instructors</Link>
        </div>
      </li>
      <li className="group">
        <div className=" group-hover:text-yellow-100 hover:underline">
          <Link to={"/classes"}>Classes</Link>
        </div>
      </li>
      {user && (
        <li className="group">
          <div className="group-hover:text-yellow-100 hover:underline">
            <Link to={"/dashboard"}>Dashboard</Link>
          </div>
        </li>
      )}
      {user ? (
        <>
          <li className="grow-0 w-fit pt-4 md:pt-0 ">
            <div>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline btn-warning text-white block hover:text-yellow-400  "
              >
                logout
              </button>
              {user.photoURL ? (
                <>
                  <div className="avatar">
                    <div className="ml-4 w-10 mask mask-squircle">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-white ">{user?.displayName}</p>
                  </div>
                </>
              )}
            </div>
          </li>
        </>
      ) : (
        <>
          <li className="grow-0 w-fit pt-4 md:pt-0  ">
            <Link to={"/login"}>
              <button className="btn btn-sm">login</button>
            </Link>
          </li>
        </>
      )}
    </>
  );
};

export default NavigationItems;
