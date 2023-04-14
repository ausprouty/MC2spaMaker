<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('spa-hope-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>6.</h1></div>
                        <div class="chapter_title ltr"><h1>Esperanza resucitó de entre los muertos</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">Mirando hacia atr&aacute;s</span></div>
</div>

<div>
<h2>1. Cuidado:</h2>

<ul>
	<li>Dales la oportunidad de compartir brevemente c&oacute;mo est&aacute;n y escuchar..</li>
</ul>

<h2>2. Rendici&oacute;n de cuentas:</h2>

<ul>
	<li>Pregunte c&oacute;mo obedecieron a Jes&uacute;s la semana pasada</li>
	<li>Pregunte con qui&eacute;n compartieron la historia la semana pasada</li>
</ul>
</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<h2>3. Contexto</h2>


<button id="MC2/spa/video/hope/06-100.mp4" type="button" class="external-movie">
         Mira &nbsp;Contexto de la historia&nbsp; en línea</button>
    <div class="collapsed"></div>

<h2>4. Descubre la Biblia juntos:</h2>

<ul>
	<li>Contar la historia de memoria</li>
	<li>Volver a contar la historia juntos</li>
	<li>Lean la historia juntos de la Biblia</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 24:1-20</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>La resurrecci&oacute;n</h3>

<p><sup class="versenum">1 </sup>El primer d&iacute;a de la semana, muy de ma&ntilde;ana, las mujeres fueron al sepulcro, llevando las especias arom&aacute;ticas que hab&iacute;an preparado.<sup class="versenum">2&nbsp;</sup>Encontraron que hab&iacute;a sido quitada la piedra que cubr&iacute;a el sepulcro<sup class="versenum">3&nbsp;</sup>y, al entrar, no hallaron el cuerpo del Se&ntilde;or Jes&uacute;s.<sup class="versenum">4&nbsp;</sup>Mientras se preguntaban qu&eacute; habr&iacute;a pasado, se les presentaron dos hombres con ropas resplandecientes.<sup class="versenum">5&nbsp;</sup>Asustadas, se postraron sobre su rostro, pero ellos les dijeron:</p>

<p>&mdash;&iquest;Por qu&eacute; buscan ustedes entre los muertos al que vive?<sup class="versenum">6&nbsp;</sup>No est&aacute; aqu&iacute;; &iexcl;ha resucitado! Recuerden lo que les dijo cuando todav&iacute;a estaba con ustedes en Galilea:<sup class="versenum">7&nbsp;</sup>&ldquo;El Hijo del hombre tiene que ser entregado en manos de hombres pecadores, y ser crucificado, pero al tercer d&iacute;a resucitar&aacute;&rdquo;.</p>

<p><sup class="versenum">8&nbsp;</sup>Entonces ellas se acordaron de las palabras de Jes&uacute;s.<sup class="versenum">9&nbsp;</sup>Al regresar del sepulcro, les contaron todas estas cosas a los once y a todos los dem&aacute;s.<sup class="versenum">10&nbsp;</sup>Las mujeres eran Mar&iacute;a Magdalena, Juana, Mar&iacute;a la madre de Jacobo, y las dem&aacute;s que las acompa&ntilde;aban.<sup class="versenum">11&nbsp;</sup>Pero a los disc&iacute;pulos el relato les pareci&oacute; una tonter&iacute;a, as&iacute; que no les creyeron.<sup class="versenum">12&nbsp;</sup>Pedro, sin embargo, sali&oacute; corriendo al sepulcro. Se asom&oacute; y vio solo las vendas de lino. Luego volvi&oacute; a su casa, extra&ntilde;ado de lo que hab&iacute;a sucedido.</p>

<h3>De camino a Ema&uacute;s</h3>

<p><sup class="versenum">13&nbsp;</sup>Aquel mismo d&iacute;a dos de ellos se dirig&iacute;an a un pueblo llamado Ema&uacute;s, a unos once kil&oacute;metros de Jerusal&eacute;n.<sup class="versenum">14&nbsp;</sup>Iban conversando sobre todo lo que hab&iacute;a acontecido.<sup class="versenum">15&nbsp;</sup>Sucedi&oacute; que, mientras hablaban y discut&iacute;an, Jes&uacute;s mismo se acerc&oacute; y comenz&oacute; a caminar con ellos;<sup class="versenum">16&nbsp;</sup>pero no lo reconocieron, pues sus ojos estaban velados.</p>

<p><sup class="versenum">17&nbsp;</sup>&mdash;&iquest;Qu&eacute; vienen discutiendo por el camino? &mdash;les pregunt&oacute;.</p>

<p>Se detuvieron, cabizbajos;<sup class="versenum">18&nbsp;</sup>y uno de ellos, llamado Cleofas, le dijo:</p>

<p>&mdash;&iquest;Eres t&uacute; el &uacute;nico peregrino en Jerusal&eacute;n que no se ha enterado de todo lo que ha pasado recientemente?</p>

<p><sup class="versenum">19&nbsp;</sup>&mdash;&iquest;Qu&eacute; es lo que ha pasado? &mdash;les pregunt&oacute;.</p>

<p>&mdash;Lo de Jes&uacute;s de Nazaret. Era un profeta, poderoso en obras y en palabras delante de Dios y de todo el pueblo.<sup class="versenum">20&nbsp;</sup>Los jefes de los sacerdotes y nuestros gobernantes lo entregaron para ser condenado a muerte, y lo crucificaron;</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/hope/06.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 24:1-20&nbsp;</button>
    <div class="collapsed"></div>

<ul>
	<li>Comenten juntos sobre la historia usando las siguientes preguntas:
	<ul>
		<li>&iquest;Qu&eacute; aprendemos acerca de Jes&uacute;s?</li>
		<li>&iquest;Qu&eacute; aprendemos de las personas?</li>
		<li>&iquest;Con qui&eacute;n te identificas m&aacute;s y por qu&eacute;?</li>
		<li>Haga un llamado: Pregunte: &quot;&iquest;Qu&eacute; le impide hoy seguir a Jes&uacute;s?&quot;</li>
	</ul>
	</li>
</ul>

<h2>5. Pr&aacute;ctica:</h2>

<ul>
	<li>Formen parejas y practiquen contando la historia unos con otros</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<h2>6. Establecer objetivos:</h2>

<ul>
	<li>&iquest;Qu&eacute; de la historia te est&aacute; pidiendo Jes&uacute;s que obedezcas esta semana?</li>
	<li>&iquest;Qui&eacute;n en tu vida que crees que necesita escuchar esta historia?</li>
</ul>

<h2>7. Oren</h2>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Esperanza resucitó de entre los muertos: ', '/content/M2/spa/hope/hope06.html')">
				<img class="social" src="@/assets/sites/mc2/images/standard/Share.png" />
			</td>
		</tr>
	</tbody>
</table>
<div class="footer">
<p class="footer">MC2</p>
<p class="footer" @click="share('website', 'https://GlobalChurchMovements.org', '')"> GlobalChurchMovements.org</p>
</div>

<!-- end mc2 sdcard languageFooter -->
<!-- end sdcard languageFooterSingle -->

</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->