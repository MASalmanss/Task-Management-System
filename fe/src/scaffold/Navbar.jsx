export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="https://www.svgrepo.com/show/9294/two-gears.svg" alt="" width="30" height="24"
                         className="d-inline-block align-text-top"/>
                    İçerik Yönetim Sistemi
                </a>
                <div className="d-flex justify-content-center">
                    <a href={"/home"} className="nav-link text-white fw-bold">Hakkımızda</a>
                    <a href={"/rooms"} className={"nav-link text-white fw-bold"}>Odalar</a>
                </div>
            </div>
        </nav>
    )
}