import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/animations.css"

import lake from "../images/lake-1.jpg"

const IndexPageStyles = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${lake});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  h2 {
    font-family: "Dancing Script", cursive;
    color: #ccc;
    text-shadow: 3px 3px rgba(0, 0, 0, 0.8);
  }

  h1 {
    margin-top: 3rem;
    text-align: center;
    opacity: 0;
    animation: 1s ease-in 0s forwards moveInBottom;
  }

  h2 {
    margin-top: 1rem;
    font-size: 3rem;
    line-height: 1.2;
    opacity: 0;
    animation: 1s ease-in 1s forwards moveInBottom;
  }

  span {
    font-size: 1.5rem;
    color: #aaa;
  }

  p {
    border-left: 2px solid #ccc;
    padding-left: 0.75rem;
    margin-top: 1.5rem;
    color: #ccc;
    font-size: 1.5rem;
    max-width: 12em;
    line-height: 1.375;
    font-style: italic;
    opacity: 0;
    animation: 1s ease-in 2s forwards moveInBottom;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Deep Thoughts" />
    <IndexPageStyles>
      <h1>
        Deep Thoughts <br />
        <span>by Jack Handey</span>
      </h1>
      <h2>
        Inspiration for
        <br /> the Uninspired
      </h2>
      <p>
        It takes a big man to cry, but it takes a bigger man to laugh at that
        man.
      </p>
    </IndexPageStyles>
  </Layout>
)

export default IndexPage
