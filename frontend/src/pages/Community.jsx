import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
import { UserContext } from "../contexts/UserContext.jsx";
import RenderUsers from "../RenderUsers";

export default function UsersPage() {
  const navigate = useNavigate();
  const { users } = useContext(UserContext);

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="container mt-8 mx-auto max-w-screen-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {users.map((user) => {
          const {
            avatar,
            username,
            full_name,
            gender,
            age,
            favorite_quote,
            email,
          } = user;

          return (
            <motion.div
              key={username}
              variants={cardVariants}
              initial="initial"
              animate="animate"
            >
              <RenderUsers
                username={`@${username}`}
                full_name={full_name}
                img={avatar}
                gender={gender}
                age={age}
                favorite_quote={favorite_quote}
                email={email}
                onClick={() => navigate(`/users/${user.id}`)}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
