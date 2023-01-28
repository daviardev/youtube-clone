import { FiFilm } from 'react-icons/fi'
import { ImNewspaper } from 'react-icons/im'
import { CgMusicNote } from 'react-icons/cg'
import { IoGameControllerSharp } from 'react-icons/io5'
import { FiSettings, FiHelpCircle } from 'react-icons/fi'
import { AiFillHome, AiOutlineFlag } from 'react-icons/ai'
import { GiDiamondTrophy, GiEclipse } from 'react-icons/gi'
import { MdLocalFireDepartment, MdLiveTv } from 'react-icons/md'
import { RiLightbulbLine, RiFeedbackLine } from 'react-icons/ri'

export const categories = [
    // Categories
    {
        name: 'Inicio',
        icon: <AiFillHome />,
        type: 'home'
    },
    {
        name: 'Tendencias',
        icon: <MdLocalFireDepartment />,
        type: 'category'
    },
    {
        name: 'Música',
        icon: <CgMusicNote />,
        type: 'category'
    },
    {
        name: 'Películas',
        icon: <FiFilm />,
        type: 'category'
    },
    {
        name: 'En directo',
        icon: <MdLiveTv />,
        type: 'category'
    },
    {
        name: 'Videojuegos',
        icon: <IoGameControllerSharp />,
        type: 'category'
    },
    {
        name: 'Noticias',
        icon: <ImNewspaper />,
        type: 'category'
    },
    {
        name: 'Deportes',
        icon: <GiDiamondTrophy />,
        type: 'category'
    },
    {
        name: 'Aprendizaje',
        icon: <RiLightbulbLine />,
        type: 'category'
    },
    {
        name: 'Moda y belleza',
        icon: <GiEclipse />,
        type: 'category',
        divider: true
    },
    // Settings
    {
        name: 'Configuración',
        icon: <FiSettings />,
        type: 'menu'
    },
    {
        name: 'Historial de denuncias',
        icon: <AiOutlineFlag />,
        type: 'menu'
    },
    {
        name: 'Ayuda',
        icon: <FiHelpCircle />,
        type: 'menu'
    },
    {
        name: 'Enviar sugerencias',
        icon: <RiFeedbackLine />,
        type: 'menu'
    }
]