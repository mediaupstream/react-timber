import React from 'react'

const Timber = ({
  consoleLog,
  hideLabel,
  children, 
  className,
  style,
  ...p
}) => {
  return Object.keys(p).map(k => {
    if (consoleLog) {
      hideLabel 
        ? console.log(p[k])
        : console.log(`${k}:`, p[k])
      return
    }
    let output = hideLabel 
      ? `${JSON.stringify(p[k], null, 2)}`
      : `${k}: \n${JSON.stringify(p[k], null, 2)}`
    return (
      <div
        className={className}
        style={style}
        key={`timber-${k}-${p[k]}`} 
      >
        <pre className={className} style={style}>
          <code>
            { output }
          </code>
        </pre>
      </div>
    )
  })
}

export default Timber
