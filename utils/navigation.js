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

const searchToObject = () => {
  const searchParams = new URLSearchParams(window.location.search)
  const result = {}
  for(const [key, value] of searchParams.entries()) {
    result[key] = value;
  }
  return result;
}

export { navigate, router, searchToObject }

