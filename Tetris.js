//Container of divs
var container = document.getElementById('div_container')

//Sizes of grid (row, column, allCount)
const column = 9
const row = 18
const div_count = row * column

//Score texts
const currentScoreText = document.getElementById('scoreText')
const highScoreText = document.getElementById('highScore')

//Colors array
const colors = ['red', 'blue', 'green', 'black', 'grey']

let score = 0
let highScore = 0

//Container sizes based on row and column
container.style.width = column * 35 + 'px'
container.style.height = row * 35 + 'px'

//Global grid array, to work with divs via coordinats
const grid = new Array();

//1: ---
const modelHero = {
    modelType: 1,
    maxDistanceFromLeft: 3,
    maxDistanceFromRight: 3,
    height: 1,
    nextRotateModelType: 11,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'under', 
                'lSide'
            ]
        },
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under'
            ]
        },
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'under', 
                'rSide'
            ]
        }
    ]
}

//11: |
const modelHeroRotated = {
    modelType: 11,
    maxDistanceFromLeft: 4,
    maxDistanceFromRight: 4,
    height: 3,
    nextRotateModelType: 1,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'rSide', 
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'rSide', 
                'lSide'
            ]
        },
        {
            rowPoint: 2,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'rSide', 
                'lSide',
                'under'
            ]
        }
    ]
}


//2: _|_
const modelTeewee = {
    modelType: 2,
    maxDistanceFromRight: 3,
    maxDistanceFromLeft: 3,
    height: 2,
    nextRotateModelType: 21,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2), 
            sideFunc: [
                'rSide',
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'under', 
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under', 
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'under', 
                'rSide'
            ]
        }
    ]
}

//21: |-
const modelTeeweeRotatedRight = {
    modelType: 21,
    maxDistanceFromRight: 3,
    maxDistanceFromLeft: 4,
    height: 3,
    nextRotateModelType: 22,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2), 
            sideFunc: [
                'rSide',
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'under', 
                'rSide'
            ]
        },
        {
            rowPoint: 2,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under', 
                'lSide',
                'rSide'
            ]
        }
    ]
}


//22:-|-
const modelTeeweeRotatedDown = {
    modelType: 22,
    maxDistanceFromRight: 3,
    maxDistanceFromLeft: 3,
    height: 2,
    nextRotateModelType: 23,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) - 1, 
            sideFunc: [
                'under',
                'lSide'
            ]
        },
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2)
        },
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'rSide',
                'under', 
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under',
                'rSide',
                'lSide'
            ]
        }
    ]
}

//23: -|
const modelTeeweeRotatedLeft = {
    modelType: 23,
    maxDistanceFromRight: 4,
    maxDistanceFromLeft: 3,
    height: 3,
    nextRotateModelType: 2,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2), 
            sideFunc: [
                'rSide',
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'rSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'under', 
                'lSide'
            ]
        },
        {
            rowPoint: 2,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under', 
                'lSide',
                'rSide'
            ]
        }
    ]
}

//3: __|
const modelRightRicky = {
    modelType: 3,
    maxDistanceFromLeft: 3,
    maxDistanceFromRight: 3,
    height: 2,
    nextRotateModelType: 31,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) + 1,
            sideFunc: [
                'rSide',
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'under', 
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'under', 
                'rSide'
            ]
        }
    ]
}

//31: |_
const modelRightRickyRotatedRight = {
    modelType: 31,
    maxDistanceFromLeft: 4,
    maxDistanceFromRight: 3,
    height: 3,
    nextRotateModelType: 32,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2),
            sideFunc: [
                'rSide',
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'rSide', 
                'lSide'
            ]
        },
        {
            rowPoint: 2,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under',
                'lSide'
            ]
        },
        {
            rowPoint: 2,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'under', 
                'rSide'
            ]
        }
    ]
}

//32: |-
const modelRightRickyRotatedDown = {
    modelType: 32,
    maxDistanceFromLeft: 3,
    maxDistanceFromRight: 3,
    height: 2,
    nextRotateModelType: 33,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) - 1,
            sideFunc: [
                'lSide'
            ]
        },
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under'
            ]
        },
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'under',
                'rSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'under',
                'rSide',
                'lSide'
            ]
        }
    ]
}

//33: -|
const modelRightRickyRotatedLeft = {
    modelType: 33,
    maxDistanceFromLeft: 3,
    maxDistanceFromRight: 4,
    height: 3,
    nextRotateModelType: 3,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2),
            sideFunc: [
                'rSide'
            ]
        },
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'under',
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'rSide',
                'lSide'
            ]
        },
        {
            rowPoint: 2,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under',
                'rSide',
                'lSide'
            ]
        }
    ]
}

//4: |__
const modelLeftRicky = {
    modelType: 4,
    maxDistanceFromLeft: 3,
    maxDistanceFromRight: 3,
    height: 2,
    nextRotateModelType: 41,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'lSide',
                'rSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'under', 
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'under', 
                'rSide'
            ]
        }
    ]
}

//41: |__
const modelLeftRickyRotatedRight = {
    modelType: 41,
    maxDistanceFromLeft: 4,
    maxDistanceFromRight: 3,
    height: 3,
    nextRotateModelType: 42,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'lSide'
            ]
        },
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'under',
                'rSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'rSide', 
                'lSide'
            ]
        },
        {
            rowPoint: 2,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under', 
                'rSide',
                'lSide'
            ]
        }
    ]
}

//42: |__
const modelLeftRickyRotatedDown = {
    modelType: 42,
    maxDistanceFromLeft: 3,
    maxDistanceFromRight: 3,
    height: 2,
    nextRotateModelType: 43,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'lSide',
                'under'
            ]
        },
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under'
            ]
        },
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'rSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'under', 
                'rSide',
                'lSide'
            ]
        }
    ]
}

//43: |__
const modelLeftRickyRotatedLeft = {
    modelType: 43,
    maxDistanceFromLeft: 3,
    maxDistanceFromRight: 4,
    height: 3,
    nextRotateModelType: 4,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'rSide',
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'rSide',
                'lSide'
            ]
        },
        {
            rowPoint: 2,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'rSide',
                'under'
            ]
        },
        {
            rowPoint: 2,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'under', 
                'lSide'
            ]
        }
    ]
}

//5: -_
const modelLeftZ = {
    modelType: 5,
    maxDistanceFromLeft: 3,
    maxDistanceFromRight: 3,
    height: 2,
    nextRotateModelType: 51,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'under', 
                'rSide'
            ]
        },
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under', 
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'under', 
                'rSide'
            ]
        }
    ]
}

//51: -_
const modelLeftZRotated = {
    modelType: 51,
    maxDistanceFromLeft: 3,
    maxDistanceFromRight: 4,
    height: 3,
    nextRotateModelType: 5,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'rSide',
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under',
                'rSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'lSide'
            ]
        },
        {
            rowPoint: 2,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'under', 
                'rSide',
                'rSide'
            ]
        }
    ]
}

//6: _-
const modelRightZ = {
    modelType: 6,
    maxDistanceFromLeft: 3,
    maxDistanceFromRight: 3,
    height: 2,
    nextRotateModelType: 61,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'under', 
                'rSide'
            ]
        },
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under', 
                'rSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) - 1,
            sidesFunc: [
                'under', 
                'lSide'
            ]
        }
    ]
}

//61: _-
const modelRightZRotated = {
    modelType: 61,
    maxDistanceFromLeft: 4,
    maxDistanceFromRight: 3,
    height: 3,
    nextRotateModelType: 6,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'rSide', 
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'lSide',
                'under'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'rSide'
            ]
        },
        {
            rowPoint: 2,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'under',
                'rSide',
                'lSide'
            ]
        }
    ]
}

//7: []
const modelSquare = {
    modelType: 7,
    maxDistanceFromLeft: 4,
    maxDistanceFromRight: 3,
    height: 2,
    coordinates: [
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'rSide'
            ]
        },
        {
            rowPoint: 0,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2),
            sidesFunc: [
                'under', 
                'lSide'
            ]
        },
        {
            rowPoint: 1,
            columnPoint: Math.floor(column/2) + 1,
            sidesFunc: [
                'under', 
                'rSide'
            ]
        }
    ]
}

//All model objects
// const models = [modelHero, modelHeroRotated, modelTeewee, modelRightRicky, modelLeftRicky, modelRightZ, modelLeftZ, modelRightZ, modelSquare]
const models = [
                modelHero,
                modelHeroRotated,
                modelTeewee,
                modelTeeweeRotatedRight,
                modelTeeweeRotatedDown,
                modelTeeweeRotatedLeft,
                modelRightRicky,
                modelRightRickyRotatedRight,
                modelRightRickyRotatedDown,
                modelRightRickyRotatedLeft,
                modelLeftRicky,
                modelLeftRickyRotatedRight,
                modelLeftRickyRotatedDown,
                modelLeftRickyRotatedLeft,
                modelLeftZ,
                modelLeftZRotated,
                modelRightZ,
                modelRightZRotated,
                modelSquare
            ]       


//Making all divs based on sizes
for(var i = 0; i < div_count; i++) {
    container.innerHTML += '<div id = "div'+i+'" class="unit_cube"></div>'
}


//Pushing divs into grid array for workig with them via coordinates
var index = 0
for(let i = 0; i < row; i++) {
    let next_array = new Array();
    grid.push(next_array)

    for(let j = 0; j < column; j++) {
        let curr_div = document.getElementById('div'+index)
        let obj = {
            div: curr_div,
            marked: false
        }
        next_array.push(obj)
        index++
    }

}

//Right-left, up-down variables for start Game function
let nextRow = 0
let nextColumn = 0
let type = 0
let color = 'red'

//Event listener for keyoard buttons selection
document.addEventListener('keydown', (event) => {
    let currentModel = getModelByType(type)
    switch (event.key) {
        case 'ArrowUp':
                if(!isContactAvailableFromSides(currentModel.nextRotateModelType)) {
                    if(!isContactAvailable(currentModel.nextRotateModelType, nextRow, nextColumn)) {
                        cleanLastModel(nextRow, type)
                        type = currentModel.nextRotateModelType
                    }
                }
            break;
        case 'ArrowLeft': 
            if(!isContactAvailableFromSides(type)) {
                if(nextColumn > - currentModel.maxDistanceFromLeft) {
                    nextColumn--
                }
            }
            break;
        case 'ArrowRight': 
            if(!isContactAvailableFromSides(type)) {
                if(nextColumn < currentModel.maxDistanceFromRight) {
                    nextColumn++
                }
            }
            break;
    }
}, false)

let lineInterval 
function startGame() {

    if(nextRow === 0) {
        type = getModelType()
        color = getRandomColor()
    }

    fallModel(type, color)

    if(isContactAvailable(type, nextRow, nextColumn) || nextRow === row - getModelByType(type).height) {
        markModel(type, nextRow, nextColumn)
        nextRow = 0
        score+=10
        nextColumn = Math.floor(Math.random() * 6) - 3
        checkGameEnd()
        lineInterval = setInterval(checkLinesAndDelete, 150)
    } else {
        nextRow++
    }

    score+= 5
    if(score > highScore) {
        highScore = score
    }
    currentScoreText.innerHTML = 'Score: '
    currentScoreText.innerHTML += score

    highScoreText.innerHTML = "High_score: "
    highScoreText.innerHTML += highScore
}

let answerInterval
function checkGameEnd() {
    for(let i = 0; i < column; i++) {
        if(grid[0][i].marked) {
            clearInterval(interval)
            answerInterval = setInterval(showAnswer, 10)
            break
        }
    }
}

function showAnswer() {
    clearInterval(answerInterval)
    alert('Your score is: ' + score+"\nAgain? ")
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            grid[i][j].marked = false
            grid[i][j].div.style.background = 'rgba(160, 160, 160, 0.2)'
            score = 0
        }
    }
    interval = setInterval(startGame, 200)
}

function checkLinesAndDelete() {
    clearInterval(lineInterval)
    for(let i = row - 1; i >= 0; i--) {
        let colored = 0
        for(let j = 0; j < column; j++) {
            if(grid[i][j].marked) {
                colored++
            }
        }
        if(colored === column) {
            for(let j = 0; j < column; j++) {
                grid[i][j].marked = false
                grid[i][j].div.style.background = 'rgba(160, 160, 160, 0.2)'
                score += 20
            }
        }
    }
}


function getRandomColor() {
    let random = Math.floor(Math.random() * (colors.length+1) )
    return colors[random]
}

function isContactAvailableFromSides(type) {
    let currentModel = getModelByType(type)
    let currentModelCoordinates = currentModel.coordinates

    for(let i = 0; i < currentModelCoordinates.length; i++) {
        if(currentModelCoordinates[i].sidesFunc !== undefined) {  
            let x1, y1, x2, y2

            if(currentModelCoordinates[i].sidesFunc.includes('lSide')) {
                x1 = currentModelCoordinates[i].rowPoint + nextRow
                y1 = currentModelCoordinates[i].columnPoint + nextColumn - 1
            }
            if(currentModelCoordinates[i].sidesFunc.includes('rSide')) {
                x2 = currentModelCoordinates[i].rowPoint + nextRow 
                y2 = currentModelCoordinates[i].columnPoint + nextColumn + 1
            }
            
            if(y1 > 0 && y1 < column) {
                if(grid[x1][y1].marked) {
                    return true
                }
            }
            if(y2 > 0 && y2 < column) {
                if(grid[x2][y2].marked) {
                    return true
                }
            }
        }
    }
    return false
}

function isContactAvailable(type, nextRow, nextColumn) {
    let currentModel = getModelByType(type)
    let currentModelCoordinates = currentModel.coordinates

    for(let i = 0; i < currentModelCoordinates.length; i++) {
        if(currentModelCoordinates[i].sidesFunc !== undefined) {    
            if(currentModelCoordinates[i].sidesFunc.includes('under')) {
                if(currentModelCoordinates[i].rowPoint + nextRow !== row - 1) {
                    let x = currentModelCoordinates[i].rowPoint + nextRow + 1
                    let y = currentModelCoordinates[i].columnPoint + nextColumn
                    if(grid[x][y].marked) {
                        return true
                    }
                }
            }
        }
    }
    return false
}

function markModel(type, nextRow, nextColumn) {
    let coordinates = getCoordinatesOfModelByType(type)
    for(let i = 0; i < coordinates.length ;i++){
        let x = coordinates[i].rowPoint + nextRow 
        let y = coordinates[i].columnPoint + nextColumn
        grid[x][y].marked = true
    }
}

function fallModel(type, color = 'red') {
    if(nextRow > 0) {
        cleanLastModel(nextRow, type)
    }

    let tempCoordinates = getCoordinatesOfModelByType(type)
    colorDivByCoordinates(tempCoordinates, color)
}

function colorDivByCoordinates(coordinates, color) {
    for(let i = 0; i < coordinates.length; i++) {
        let x = coordinates[i].rowPoint + nextRow 
        let y = coordinates[i].columnPoint + nextColumn
        grid[x][y].div.style.background = color
    }
}

function getModelByType(type) {
    let tempModel = modelHero
    for(let i = 0; i < models.length; i++) {
        if(models[i].modelType === type) {
            tempModel = models[i]
        }
    }
    return tempModel
}

function getCoordinatesOfModelByType(type) {
    return getModelByType(type).coordinates
}

function cleanLastModel(nextRow,type) {
    for (let i = nextRow - 1; i < nextRow + getModelByType(type).height - 1; i++) {
        for(let j = 0; j < column; j++) {
            if(!grid[i][j].marked) {
                grid[i][j].div.style.background = 'rgba(160, 160, 160, 0.2)'
            }
        }
    }
}

//Getting random number 0-7 for model type
function getModelType() {
    return Math.floor(Math.random() * 7) + 1
}

//starting program
let interval = setInterval(startGame, 200)

//rgba(160, 160, 160, 0.2)