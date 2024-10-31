import typeButton from '../styles/TypeButton.module.css'

export default function TypeButton({type, text}){
    return(
        <div>
            <span className={`${typeButton[type]} ${typeButton.typeBtn}`}>
                {text}
            </span>
        </div>
    )
}