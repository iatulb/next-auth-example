import { Navbar, Container, Nav, Image } from "react-bootstrap";
import Link from 'next/link'

export default function () {
    return (
        <header>
            <Navbar bg="primary" variant="dark" fixed="top">
                <Container >
                    <Link href="/" passHref>
                        <Navbar.Brand href="/">
                            <Image src="/images/favpng_bench-clip-art.png" rounded height={30} width={30} />
                        </Navbar.Brand>
                    </Link>

                    <Nav className="me-auto my-2 my-lg-0"
                        navbarScroll>
                        <Link href="/" passHref>
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                        <Link href="/notifications" passHref>
                            <Nav.Link>Notifications</Nav.Link>
                        </Link>

                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}