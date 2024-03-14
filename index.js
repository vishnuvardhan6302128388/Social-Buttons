const Button = props => {
  const {name, classNames} = props
  return <button className={classNames}>{name}</button>
}

const element = (
  <div className='bg-container'>
    <h1 className='heading'>Social Buttons</h1>
    <div className='btn-container'>
      <Button name='Like' classNames='first' />
      <Button name='Comment' classNames='second' />
      <Button name='Share' classNames='third' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
