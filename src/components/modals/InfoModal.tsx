import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
    isOpen: boolean
    handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
    return (
        <BaseModal
            title="¿Cómo jugar?"
            isOpen={isOpen}
            handleClose={handleClose}
        >
            <p className="text-sm text-gray-500 dark:text-gray-300">
                Tenés 6 intentos para descubrir la palabra 5seis del día.
                Después de cada intento, el color de las letras va a cambiar
                para que veas que tan cerca estás de la solución.
            </p>

            <div className="flex justify-center mt-4 mb-1">
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="5"
                    status="correct"
                />
                <Cell value="L" />
                <Cell value="I" />
                <Cell value="F" />
                <Cell value="E" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                La letra S está en el lugar correcto.
            </p>

            <div className="flex justify-center mt-4 mb-1">
                <Cell value="B" />
                <Cell value="R" />
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="A"
                    status="present"
                />
                <Cell value="N" />
                <Cell value="D" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                La letra L está presente en la palabra pero en el lugar
                incorrecto.
            </p>

            <div className="flex justify-center mt-4 mb-1">
                <Cell value="E" />
                <Cell value="T" />
                <Cell value="H" />
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="U"
                    status="absent"
                />
                <Cell value="R" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                La letra U no está en ningún lugar de la palabra.
            </p>

            <p className="mt-6 text-xs italic text-gray-500 dark:text-gray-300">
                Es una versión de código abierto del juego de adivinar palabras
                que todos conocemos y amamos -{' '}
                <a
                    href="https://github.com/cwackerfuss/react-wordle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline outline-0 outline-none"
                >
                    mirá el código acá
                </a>{' '}
            </p>
        </BaseModal>
    )
}
