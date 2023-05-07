import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const updatedUser = { name, email };
    console.log(name, email);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedUser.email}
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Update;
