#!/usr/bin/env node
// CREDIT Kentcdodds workshop setup script ease of use

var spawnSync = require('child_process').spawnSync

var FAILURE = 'failure'
var SUCCESS = 'success'

// disable https://scarf.sh/
// which is used by some projects dependencies
process.env.SCARF_ANALYTICS = false

var logo = `
██████╗ ██╗      █████╗ ███████╗████████╗     ██████╗ ███████╗███████╗
██╔══██╗██║     ██╔══██╗██╔════╝╚══██╔══╝    ██╔═══██╗██╔════╝██╔════╝
██████╔╝██║     ███████║███████╗   ██║       ██║   ██║█████╗  █████╗
██╔══██╗██║     ██╔══██║╚════██║   ██║       ██║   ██║██╔══╝  ██╔══╝
██████╔╝███████╗██║  ██║███████║   ██║       ╚██████╔╝██║     ██║
╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝        ╚═════╝ ╚═╝     ╚═╝

`

var styles = {
  // got these from playing around with what I found from:
  // https://github.com/istanbuljs/istanbuljs/blob/0f328fd0896417ccb2085f4b7888dd8e167ba3fa/packages/istanbul-lib-report/lib/file-writer.js#L84-L96
  // they're the best I could find that works well for light or dark terminals
  success: {open: '\u001b[32;1m', close: '\u001b[0m'},
  danger: {open: '\u001b[31;1m', close: '\u001b[0m'},
  info: {open: '\u001b[36;1m', close: '\u001b[0m'},
  subtitle: {open: '\u001b[2;1m', close: '\u001b[0m'},
}

function color(modifier, string) {
  return styles[modifier].open + string + styles[modifier].close
}

function run(title, subtitle, command, options) {
  options = options || {}

  console.log(color('info', '    ▶️  Starting: ' + title))
  console.log(color('subtitle', '          ' + subtitle))
  console.log(
    color('subtitle', '          Running the following command: ' + command),
  )

  var result = spawnSync(command, {stdio: 'inherit', shell: true})

  if (result.status !== 0 && !options.ignoreFailure) {
    console.error(
      color(
        'danger',
        '    🚨  Failure: ' +
          title +
          '. Please review the messages above for information on how to troubleshoot and resolve this issue.',
      ),
    )
    process.exit(result.status)
    return FAILURE
  }

  console.log(color('success', '    ✅  Success: ' + title + '\n\n'))
  return SUCCESS
}

console.log(color('info', '▶️  Starting rocket science setup...'))

var error = spawnSync('npx --version', {shell: true}).stderr.toString().trim()
if (error) {
  console.error(
    color(
      'danger',
      '🚨  npx is not available on this computer. Please install npm@latest',
    ),
  )
  throw error
}

function main() {
  var result

  result = run(
    'System Validation',
    'Ensuring the correct versions of tools are installed on this computer.',
    'npx "https://gist.github.com/Jordan-Gilliam/a9b9fb60e6a0c7a27cca8836b46cdb89"',
  )
  if (result === FAILURE) return

  result = run(
    'Dependency Installation',
    'Installing third party code dependencies so the workshop works properly on this computer.',
    'npm install',
  )
  if (result === FAILURE) return

  result = run(
    'Project Validation',
    'Running validation checks to ensure dependencies were installed properly',
    'npm run validate -s',
  )
  if (result === FAILURE) return

  if (result.status === 0) {
    console.log(color('success', '✅  Rocket Science setup complete...'))
    console.log(color('success', '✅  run to get started: npm launch'))
    console.log(color('success', logo))
  } else {
    process.exit(result.status)
  }
}

main()
