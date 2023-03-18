// Listagem das informações do blog que vem do wordpress
import { useState, useEffect } from 'react'
import NavbarTogglerCP from "@/components/NavbarTogglerCP";
import { Container } from "reactstrap";

export default function Home() {
  const [post, setPost] = useState();
  useEffect(( )=> {
    function getAllPost() {
      const posts = fetch(`${process.env.NEXT_PUBLIC_API_URL}wp-json/wp/v2/posts`)
      setPost(posts)
    }
    getAllPost()
  },[])

  return (
    <>
      <NavbarTogglerCP />
      <Container>
      </Container>
    </>
  )
}
