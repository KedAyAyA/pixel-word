export default class WordFactory {
  static I () 
  {
    return {
      maxWidth: 3,
      data: [
        {
          'from': [1, 1],
          'to': [3, 1]
        },
        {
          'from': [2, 2],
          'to': [2, 4]
        },
        {
          'from': [1, 5],
          'to': [3, 5]
        }
      ]
    }
  }

  static heart () {
    return {
      maxWidth: 5, 
      data: [
        {
          'from': [2, 1],
          'to': [2, 1]
        },
        {
          'from': [4, 1],
          'to': [4, 1]
        },
        {
          'from': [1, 2],
          'to': [1, 3]
        },
        {
          'from': [2, 2],
          'to': [4, 2]
        },
        {
          'from': [2, 3],
          'to': [4, 3]
        },
        {
          'from': [5, 2],
          'to': [5, 3]
        },
        
        {
          'from': [2, 4],
          'to': [4, 4]
        },
        {
          'from': [3, 5],
          'to': [3, 5]
        },
      ]
    }
  }

  static G () {
    return {
      maxWidth: 4,
      data: [
        {
          'from': [1, 2],
          'to': [1, 4]
        },
        {
          'from': [2, 1],
          'to': [3, 1]
        },
        {
          'from': [2, 5],
          'to': [3, 5]
        },

        {
          'from': [4, 3],
          'to': [4, 4]
        },
        {
          'from': [3, 3],
          'to': [3, 3]
        }
      ]
    }
  }

  static Y () {
    return {
      maxWidth: 5,
      data: [
        {
          'from': [1, 1],
          'to': [1, 2]
        },
        {
          'from': [2, 3],
          'to': [3, 3]
        },
        {
          'from': [4, 1],
          'to': [4, 4]
        },
        {
          'from': [1, 5],
          'to': [3, 5]
        },
      ]
    }
  }
}