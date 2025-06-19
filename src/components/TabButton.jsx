export default function TabButton({children}) {
    const handleClick = () => {
        console.log("Hello World!")
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}