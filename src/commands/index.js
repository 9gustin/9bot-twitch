const createCommand = (message) => {
  console.log(message);
  const [cmd, returnValue] = message.split('-');
  commands.push({key: [cmd.trim()], return: returnValue.trim()})
}

let commands = [
  {
    key: ['9discord', '9ds'],
    return: 'Hola pa, unite al ds https://discord.gg/WGta3UrCCW'
  },
  {
    key: ['hola', 'buena'],
    return: 'que ondaaaaaaaaaaaaaaaaaaaaaaaa?'
  },
  {
    key: ['9recursividad'],
    return: '9recursividad'
  },
  {
    key: ['a'],
    return: 'a'
  },
  {
    key: ['9musiquita', '9musica'],
    return: 'Te paso mi rica playlist: https://open.spotify.com/playlist/7LnJ7vOMqsXXLfz4TTkIXs?si=f5b50028db98444d'
  },
  {
    key: ['9set'],
    fn: createCommand
  }
];

module.exports = commands;
