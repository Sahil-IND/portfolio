const OneSkill = ({ skill, Icon }) => {
  return (
    <div className='flex flex-col items-center rounded-t-full px-4 py-6 mx-4 text-white w-36 h-52 bg-violet-700 shadow-lg'>
      <div className='rounded-full w-24 h-24 border-4 border-violet-700 flex items-center justify-center text-6xl mb-4 bg-white text-cyan-500'>
        <Icon />
      </div>
      <div className="text-sm font-semibold text-center">{skill}</div>
    </div>
  );
};

export default OneSkill;
