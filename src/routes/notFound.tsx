import Functional from "@/components/Functional"

const NotFound = () => {
  return (
    <Functional.MainWrapper className="h-screen flex flex-col">
      <Functional.Nav />
      <div className="content flex-1 justify-center items-center flex flex-col font-bdo-grotesk">
        <p className="text-secondary-400 text-[8rem] font-black">404</p>
        <p className="text-secondary-400 text-[4rem] font-bold">There's nothing here</p>
      </div>
      <Functional.Footer />
    </Functional.MainWrapper>
  )
}

export default NotFound