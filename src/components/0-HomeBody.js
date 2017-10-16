import React from 'react';

const HomeBody = () => (
    <div>
        <section id="equilibre" className="section-pair">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="equilibre-right">
                            <h1>Qu'est-ce qu'une assiette équilibrée ?</h1>
                            <p>La question n'est pas évidente... Et après de nombreuse lecture, j'estime qu'il n'y a pas de réponse universelle
                  à cette question! Mais bon, il faut bien se nourrir! Je vous propose donc une méthode sans prise de tête pour
                  élaborer votre assiette quotidienne qui se rapproche de toutes blablabla...</p>
                        </div>
                        <br />
                        <a href="/equilibre" className="btn btn-default equilibre-btn">Trouve l'équilibre !</a>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="equilibre-left">
                            <img src="img/assiette_equilibre.png" />
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id="recettes" className="section-impair">
            <a href="/recettes" className="btn btn-default equilibre-btn">Toutes les recettes</a>
            Une div avec seulement les 4-6 premieres recettes de la liste, comment faire? Puis supprimer la section de dessous
      </section>

        <section id="techniques" className="section-pair">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="techniques-left">
                            <img src="img/image-test.jpg" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="techniques-right">
                            <h1>Tout le monde peut apprendre!</h1>
                            <p>Et parce que certaines techniques peuvent t'éviter de perdre ton temps... et peut être un doigt!</p>
                        </div>
                        <br />
                        <a href="/techniques" className="btn btn-default techniques-btn">Les techniques</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="palcard" className="section-impair">
            <div className="container">
                <div className="col-md-6 col-sm-6">
                    <div className="palcard-right">
                        <h1>Qu'y a-t-il dans ton placard ?</h1>
                        <p>Que ce soit les épices, le riz, les harcots secs en tout genre, et quelques condiments, voici une liste d'aliments
                à posséder dans son placard pour ne pas se retrouver le bec dans l'eau !</p>
                    </div>
                    <br />
                    <a href="/placard" className="btn btn-default palcard-btn">Remplis ton placard !</a>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="palcard-left">
                            <img src="img/placard.jpg" />
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id="ustensiles" className="section-pair">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="ustensiles-left">
                            <img src="img/ustensiles.jpg" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="ustensiles-right">
                            <h1>Le matériel de base pour une cuisine efficace au quotidien !</h1>
                            <p>Parce que pour prendre plaisir à cuisiner, il te faut de bons outils! Ne vous inquiétez pas, vous n'aurez pas
                  besoin du dernier gadget culinaire à la mode!</p>
                        </div>
                        <br />
                        <a href="/ustensiles" className="btn btn-default ustensiles-btn">De bon ustensiles !</a>
                    </div>
                </div>
            </div>
        </section>


        <section id="about" className="section-impair">
            <div className="container">
                <h1>Pourquoi ce site ?</h1>
                <p>On aime tous partager de bon moment autour de bon repas entre amis, ou des apéro-dinatoires avec des petits toast sympa
            et une bonne bouteille de vin! Mais avouons-le nous, dans ces moments là, on a plaisir à cuisiner et on ne cherche
            pas vraiment à élaborer une cuisine très saine!</p>
                <p>Personnellement, je trouve que la cuisine du quotidien est celle qui est la moins évidente, et le soir arrivant, c'est
            le drame ! Je sors de ma séance sportive, c'est décidé, pas de fast-food, ni de plat préparé, je cuisine! Mais les
            réflexions fusent :</p>
                <ul>
                    <li>Je cuisine quoi ?</li>
                    <li>C'est compliqué de cuisiner...</li>
                    <li>Je fais quoi avec ce poireau au fond de mon bac à légume acheté dans l'espoir de manger un peu de verdure ?</li>
                    <li>Mais d'ailleurs, c'est bien beau de vouloir manger équilibré, mais c'est quoi un repas équilibré ?</li>
                </ul>
                <p>Bref, autant de questions qui restent souvent sans réponse, même après de nombreuses recherches Google! C'est pour cela que
            j'ai eu envie de créer ce petit site web en essayant d'apporter tout ce dont vous avez besoin pour cuisiner au quotidien!
          </p>
                <a className="btn btn-default about-btn">Si tu veux en savoir plus !</a>
            </div>
        </section>
    </div>
)

export default HomeBody;