let table = document.querySelector('table')
let inputField = document.querySelector('input')
let nums = []
let a = 0
let j

table.addEventListener('click', function(e){
    if (e.target.innerText !== '=' && e.target.innerText !== 'Clear'){

        if (Number.isNaN(parseInt(e.target.innerText))){
            inputField.value += ' ' + e.target.innerText + ' '
        } else {
            inputField.value += e.target.innerText
        }

    } else if (e.target.innerText === '='){

        let op = inputField.value
        op = op.trim()
        nums = op.split(' ')
        console.log(nums)
        let o = 0;
        while(o < nums.length){
            if (nums[o] === 'x'){

                j = o
                console.log(nums)
                a = parseInt(nums[j-=1])*parseInt(nums[j+=2])
                nums[j] = a

                for (let s = 0; s < 2; s++){
                    nums.splice(--j, 1)
                }

                console.log(nums)
                i = 0
            }
            if (nums[o] === '/'){

                j = o
                console.log(nums)
                a = parseInt(nums[j-=1])/parseInt(nums[j+=2])
                nums[j] = a

                for (let s = 0; s < 2; s++){
                    nums.splice(--j, 1)
                }

                console.log(nums)
                i = 0
            }
            o++
        }
        for (let i = 0; i < nums.length; i++){

            j = i

            if (nums[i] === '+'){

                a = parseInt(nums[j-=1])+parseInt(nums[j+=2])
                nums[j] = a

                for (let s = 0; s < 2; s++){
                    nums.splice(--j, 1)
                }

                i = 0
            }
            if (nums[i] === '-'){

                a = parseInt(nums[j-=1])-parseInt(nums[j+=2])
                nums[j] = a

                for (let s = 0; s < 2; s++){
                    nums.splice(--j, 1)
                }

                console.log(nums)
                i = 0
            }
        }
        inputField.value = nums
        nums = []
    }
    if (e.target.innerText === 'Clear'){
        inputField.value = ''
    }
})
