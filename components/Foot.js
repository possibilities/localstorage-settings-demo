export default () => (
  <div>
    <hr />
    <p><em>note: this is a small example so the flicker might seem tenable but if settings dictate the conditional display of a more complex UI it becomes a larger issue.</em></p>
    <div>
      <style jsx>{`
        div {
          position: absolute;
          right: 10px;
          bottom: 10px;
        }
      `}</style>
      <a href='https://zeit.co/deployments/localstorage-settings-demo.arthack.io/source'>code</a>
      {` `}| {` `}
      <a href='https://github.com/possibilities/localstorage-settings-demo'>repo</a>
      {` `}| {` `}
      <a href='https://zeit.co/deployments/localstorage-settings-demo.arthack.io/logs'>logs</a>
    </div>
  </div>
)
