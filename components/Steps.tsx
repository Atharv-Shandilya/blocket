import StepsItems from './StepsItems';

const Steps = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <StepsItems heading="" paragraph="" image="" />
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <StepsItems heading="" paragraph="" image="" />
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <StepsItems heading="" paragraph="" image="" />
      </div>
      <div className="h-screen w-screen flex justify-center items-center bg-blue-gray-900">
        <StepsItems heading="" paragraph="" image="" />
      </div>
    </>
  );
};

export default Steps;
