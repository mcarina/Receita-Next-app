const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div clas1sName="header-box">
        <h1 className="header-box-title">
            {title}
            {type === 'greeting' && ( 
                <span className='text-bankGradient'>{user}</span>)}
        </h1>

        <p className="header-box-subtext">{subtext}</p>
    </div>
  )
}

export default HeaderBox