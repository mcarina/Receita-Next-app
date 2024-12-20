import React from 'react'
import HeaderBox from './HeaderBox'

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from './ui/button'

const MyRecipes = () => {
  return (
    <div className="Home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                    title='My recipes'
                    subtext='As receitas que você criou ficam salvas aqui ^^'
                />
            </header>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <h2 className="text-18 font-bold" >Card Title</h2>
                        <p className="text-14">Card Description</p>
                    </CardHeader>
                    <CardContent>
                        imagem
                    </CardContent>
                    <CardFooter>
                        <Button>Ver mais...</Button>
                    </CardFooter>
                </Card>
            </div>

        </div>        
    </div>
)
}

export default MyRecipes