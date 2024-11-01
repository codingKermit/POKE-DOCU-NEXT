import '../styles/global.css';
import typeButton from '../styles/TypeButton.module.css'

export default function TypeButton({type, text}){
    console.log('type :',type);
    console.log('text :',text);
    return(
        <div>
            <span className={`${typeButton[type]} ${typeButton.typeBtn}`}>
                {text}
            </span>
        </div>
    )
}