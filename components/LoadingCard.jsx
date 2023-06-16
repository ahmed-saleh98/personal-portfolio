const LoadingCard = () => (
  <div className="border border-[--main-color] shadow w-[300px] rounded-md p-4 ">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-[--color-primary] h-10 w-10"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-[--main-color] rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-[--main-color] rounded col-span-2"></div>
            <div className="h-2 bg-[--main-color] rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-[--main-color] rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

export default LoadingCard;
