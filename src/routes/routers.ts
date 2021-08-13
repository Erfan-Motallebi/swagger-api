import express, { Request, Response } from "express";

const Router: express.Router = express.Router();

const users = [
  {
    id: 1,
    name: "Eric",
    age: 31,
  },
  {
    id: 2,
    name: "Peter",
    age: 19,
  },
  {
    id: 3,
    name: "John",
    age: 45,
  },
];

Router.get("/users", (req: Request, res: Response) => {
  res.send(users);
});

Router.get("/user/:userId", (req: Request, res: Response) => {
  const { userId } = req.params;
  const newUser = users.find((user) => {
    return user.id === +userId;
  });
  if (newUser) {
    res.status(200).json(newUser);
  } else {
    res.sendStatus(404);
  }
});

Router.put"/users", (req: Request, res: Response) => {
  const newCommer = req.body;
  const newUsers = users.concat(newCommer);
  if (newUsers) {
    res.status(200).json(newUsers);
  } else {
    res.sendStatus(404);
  }
});

export default Router;
