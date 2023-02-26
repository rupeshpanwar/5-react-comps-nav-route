import Modal from "../components/Modal"
import Button from "../components/Button"
import { useState } from "react"

function ModalPage(){

    const [showModal,setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>
            I Accept
        </Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important agreement for you to accept the terms and conditions
            </p>
    </Modal> 

    return (
        <div>
            <Button onClick={handleClick} >Open Modal</Button>
            {showModal && modal}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida nisi turpis, convallis commodo ante aliquet a. Vivamus at finibus lacus, nec pellentesque leo. Donec nec dui eget mauris tincidunt efficitur. Praesent in leo lectus. Phasellus auctor ultricies velit ac scelerisque. Maecenas feugiat quam sit amet tellus vehicula posuere. Nunc vehicula sed nunc vel ullamcorper.

Mauris vel congue purus. Curabitur viverra tortor lorem, ac cursus lorem tincidunt ac. Sed auctor, justo nec sollicitudin cursus, mi elit malesuada nisi, quis interdum lectus augue sed libero. Fusce eleifend malesuada venenatis. Pellentesque eget mauris eu nisl viverra pretium id et sem. Integer maximus neque non ante vehicula, at viverra tortor blandit. Morbi ut libero ut leo dignissim commodo nec a nunc. Duis vel cursus massa. Etiam consequat risus urna, ut laoreet nulla eleifend at. Proin sed imperdiet lorem. Quisque at ante efficitur, commodo diam in, vulputate lacus. Etiam leo augue, pretium eu mauris et, maximus luctus massa. Mauris rhoncus vestibulum nulla, vel tempor ex tristique venenatis.

Ut non laoreet dui. Fusce volutpat est sed ex pharetra sagittis. Ut ultrices quis sapien in suscipit. Nulla ornare vel lorem vel sodales. Mauris commodo nunc ac aliquam semper. Aliquam et justo lobortis turpis aliquet tristique quis eu justo. Cras sit amet ultricies ex. Aliquam rhoncus ipsum elit, eu imperdiet urna euismod id. Morbi dignissim imperdiet dolor, sit amet commodo orci. Pellentesque condimentum venenatis orci sit amet maximus. Etiam malesuada tellus a nisi aliquet, sed tincidunt diam pharetra. Ut condimentum, diam id sollicitudin laoreet, mauris ante imperdiet nunc, non ornare sem ex vitae orci. Aenean lectus nulla, pellentesque at bibendum non, pellentesque eu ligula. Cras pulvinar blandit dui non fringilla. Donec non viverra velit. Vestibulum lacinia, neque at sagittis dapibus, lorem diam vehicula augue, a maximus odio mi a diam.

Pellentesque enim tortor, accumsan at egestas in, eleifend laoreet nunc. Fusce eget leo ac augue pharetra tempus. Suspendisse vitae justo id nibh interdum porttitor vitae a erat. Pellentesque consequat ipsum eros. Aenean ullamcorper ut mi vitae pharetra. Etiam aliquam rhoncus risus et tempor. Proin laoreet risus lacus. Fusce viverra fermentum placerat.

Duis at rhoncus augue. Cras est purus, elementum quis dapibus ac, commodo quis metus. Vestibulum a tristique mi. Etiam id consectetur turpis. Integer eu mollis velit. Sed ut nulla vel turpis dapibus faucibus eget nec ante. Suspendisse potenti.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida nisi turpis, convallis commodo ante aliquet a. Vivamus at finibus lacus, nec pellentesque leo. Donec nec dui eget mauris tincidunt efficitur. Praesent in leo lectus. Phasellus auctor ultricies velit ac scelerisque. Maecenas feugiat quam sit amet tellus vehicula posuere. Nunc vehicula sed nunc vel ullamcorper.

Mauris vel congue purus. Curabitur viverra tortor lorem, ac cursus lorem tincidunt ac. Sed auctor, justo nec sollicitudin cursus, mi elit malesuada nisi, quis interdum lectus augue sed libero. Fusce eleifend malesuada venenatis. Pellentesque eget mauris eu nisl viverra pretium id et sem. Integer maximus neque non ante vehicula, at viverra tortor blandit. Morbi ut libero ut leo dignissim commodo nec a nunc. Duis vel cursus massa. Etiam consequat risus urna, ut laoreet nulla eleifend at. Proin sed imperdiet lorem. Quisque at ante efficitur, commodo diam in, vulputate lacus. Etiam leo augue, pretium eu mauris et, maximus luctus massa. Mauris rhoncus vestibulum nulla, vel tempor ex tristique venenatis.

Ut non laoreet dui. Fusce volutpat est sed ex pharetra sagittis. Ut ultrices quis sapien in suscipit. Nulla ornare vel lorem vel sodales. Mauris commodo nunc ac aliquam semper. Aliquam et justo lobortis turpis aliquet tristique quis eu justo. Cras sit amet ultricies ex. Aliquam rhoncus ipsum elit, eu imperdiet urna euismod id. Morbi dignissim imperdiet dolor, sit amet commodo orci. Pellentesque condimentum venenatis orci sit amet maximus. Etiam malesuada tellus a nisi aliquet, sed tincidunt diam pharetra. Ut condimentum, diam id sollicitudin laoreet, mauris ante imperdiet nunc, non ornare sem ex vitae orci. Aenean lectus nulla, pellentesque at bibendum non, pellentesque eu ligula. Cras pulvinar blandit dui non fringilla. Donec non viverra velit. Vestibulum lacinia, neque at sagittis dapibus, lorem diam vehicula augue, a maximus odio mi a diam.

Pellentesque enim tortor, accumsan at egestas in, eleifend laoreet nunc. Fusce eget leo ac augue pharetra tempus. Suspendisse vitae justo id nibh interdum porttitor vitae a erat. Pellentesque consequat ipsum eros. Aenean ullamcorper ut mi vitae pharetra. Etiam aliquam rhoncus risus et tempor. Proin laoreet risus lacus. Fusce viverra fermentum placerat.

Duis at rhoncus augue. Cras est purus, elementum quis dapibus ac, commodo quis metus. Vestibulum a tristique mi. Etiam id consectetur turpis. Integer eu mollis velit. Sed ut nulla vel turpis dapibus faucibus eget nec ante. Suspendisse potenti.
            </p>
        </div>
    )
}

export default ModalPage