import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "../components/Home"
import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { Login } from "../components/Login"
import { Register } from "../components/Register"
import { Services } from "../components/Services"
import { ErrorPage } from "../components/ErrorPage"
import { ProtectedWrapper } from "../components/ProtectedWrapper"


const RoutingComponent = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={(<ProtectedWrapper><Home /></ProtectedWrapper>)} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/services" element={<Services />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export const Routing = React.memo(RoutingComponent);