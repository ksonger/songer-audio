let nextRouter;

const navigate = (path) => {
  if(nextRouter)  {
    nextRouter.push(path)
  }
}

const router = (r) => {
  if(r) {
    nextRouter = r
  } else {
    return nextRouter
  }
}

export { navigate, router }

