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
                        <div class="chapter_number ltr"><h1>5.</h1></div>
                        <div class="chapter_title ltr"><h1>Esperanza a través de la muerte</h1></div>
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


<button id="MC2/spa/video/hope/05-100.mp4" type="button" class="external-movie">
         Mira &nbsp;Contexto de la historia&nbsp; en línea</button>
    <div class="collapsed"></div>

<h2>4. Descubre la Biblia juntos:</h2>

<ul>
	<li>Contar la historia de memoria</li>
	<li>Volver a contar la historia juntos</li>
	<li>Lean la historia juntos de la Biblia</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 22:66-23:25</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s ante Pilato y Herodes</h3>

<p><sup class="versenum">66&nbsp;</sup>Al amanecer, se reunieron los ancianos del pueblo, tanto los jefes de los sacerdotes como los maestros de la ley, e hicieron comparecer a Jes&uacute;s ante el Consejo.</p>

<p><sup class="versenum">67&nbsp;</sup>&mdash;Si eres el Cristo, d&iacute;noslo &mdash;le exigieron.</p>

<p>Jes&uacute;s les contest&oacute;:</p>

<p>&mdash;Si se lo dijera a ustedes, no me lo creer&iacute;an<sup class="versenum">68&nbsp;</sup>y, si les hiciera preguntas, no me contestar&iacute;an.<sup class="versenum">69&nbsp;</sup>Pero de ahora en adelante el Hijo del hombre estar&aacute; sentado a la derecha del Dios Todopoderoso.</p>

<p><sup class="versenum">70&nbsp;</sup>&mdash;&iquest;Eres t&uacute;, entonces, el Hijo de Dios? &mdash;le preguntaron a una voz.</p>

<p>&mdash;Ustedes mismos lo dicen.</p>

<p><sup class="versenum">71&nbsp;</sup>&mdash;&iquest;Para qu&eacute; necesitamos m&aacute;s testimonios? &mdash;resolvieron&mdash;. Acabamos de o&iacute;rlo de sus propios labios.</p>

<p><sup class="versenum">1 </sup>As&iacute; que la asamblea en pleno se levant&oacute;, y lo llevaron a Pilato.<sup class="versenum">2&nbsp;</sup>Y comenzaron la acusaci&oacute;n con estas palabras:</p>

<p>&mdash;Hemos descubierto a este hombre agitando a nuestra naci&oacute;n. Se opone al pago de impuestos al emperador y afirma que &eacute;l es el Cristo, un rey.</p>

<p><sup class="versenum">3&nbsp;</sup>As&iacute; que Pilato le pregunt&oacute; a Jes&uacute;s:</p>

<p>&mdash;&iquest;Eres t&uacute; el rey de los jud&iacute;os?</p>

<p>&mdash;T&uacute; mismo lo dices &mdash;respondi&oacute;.</p>

<p><sup class="versenum">4&nbsp;</sup>Entonces Pilato declar&oacute; a los jefes de los sacerdotes y a la multitud:</p>

<p>&mdash;No encuentro que este hombre sea culpable de nada.</p>

<p><sup class="versenum">5&nbsp;</sup>Pero ellos insist&iacute;an:</p>

<p>&mdash;Con sus ense&ntilde;anzas agita al pueblo por toda Judea. Comenz&oacute; en Galilea y ha llegado hasta aqu&iacute;.</p>

<p><sup class="versenum">6&nbsp;</sup>Al o&iacute;r esto, Pilato pregunt&oacute; si el hombre era galileo.<sup class="versenum">7&nbsp;</sup>Cuando se enter&oacute; de que pertenec&iacute;a a la jurisdicci&oacute;n de Herodes, se lo mand&oacute; a &eacute;l, ya que en aquellos d&iacute;as tambi&eacute;n Herodes estaba en Jerusal&eacute;n.</p>

<p><sup class="versenum">8&nbsp;</sup>Al ver a Jes&uacute;s, Herodes se puso muy contento; hac&iacute;a tiempo que quer&iacute;a verlo por lo que o&iacute;a acerca de &eacute;l, y esperaba presenciar alg&uacute;n milagro que hiciera Jes&uacute;s.<sup class="versenum">9&nbsp;</sup>Lo acos&oacute; con muchas preguntas, pero Jes&uacute;s no le contestaba nada.<sup class="versenum">10&nbsp;</sup>All&iacute; estaban tambi&eacute;n los jefes de los sacerdotes y los maestros de la ley, acus&aacute;ndolo con vehemencia.<sup class="versenum">11&nbsp;</sup>Entonces Herodes y sus soldados, con desprecio y burlas, le pusieron un manto lujoso y lo mandaron de vuelta a Pilato.<sup class="versenum">12&nbsp;</sup>Anteriormente, Herodes y Pilato no se llevaban bien, pero ese mismo d&iacute;a se hicieron amigos.</p>

<p><sup class="versenum">13&nbsp;</sup>Pilato entonces reuni&oacute; a los jefes de los sacerdotes, a los gobernantes y al pueblo,<sup class="versenum">14&nbsp;</sup>y les dijo:</p>

<p>&mdash;Ustedes me trajeron a este hombre acusado de fomentar la rebeli&oacute;n entre el pueblo, pero resulta que lo he interrogado delante de ustedes sin encontrar que sea culpable de lo que ustedes lo acusan.<sup class="versenum">15&nbsp;</sup>Y es claro que tampoco Herodes lo ha juzgado culpable, puesto que nos lo devolvi&oacute;. Como pueden ver, no ha cometido ning&uacute;n delito que merezca la muerte,<sup class="versenum">16&nbsp;</sup>as&iacute; que le dar&eacute; una paliza y despu&eacute;s lo soltar&eacute;.</p>

<p><sup class="versenum">18&nbsp;</sup>Pero todos gritaron a una voz:</p>

<p>&mdash;&iexcl;Ll&eacute;vate a ese! &iexcl;Su&eacute;ltanos a Barrab&aacute;s!</p>

<p><sup class="versenum">19&nbsp;</sup>A Barrab&aacute;s lo hab&iacute;an metido en la c&aacute;rcel por una insurrecci&oacute;n en la ciudad, y por homicidio.<sup class="versenum">20&nbsp;</sup>Pilato, como quer&iacute;a soltar a Jes&uacute;s, apel&oacute; al pueblo otra vez,<sup class="versenum">21&nbsp;</sup>pero ellos se pusieron a gritar:</p>

<p>&mdash;&iexcl;Crucif&iacute;calo! &iexcl;Crucif&iacute;calo!</p>

<p><sup class="versenum">22&nbsp;</sup>Por tercera vez les habl&oacute;:</p>

<p>&mdash;Pero &iquest;qu&eacute; crimen ha cometido este hombre? No encuentro que &eacute;l sea culpable de nada que merezca la pena de muerte, as&iacute; que le dar&eacute; una paliza y despu&eacute;s lo soltar&eacute;.</p>

<p><sup class="versenum">23&nbsp;</sup>Pero a voz en cuello ellos siguieron insistiendo en que lo crucificara, y con sus gritos se impusieron.<sup class="versenum">24&nbsp;</sup>Por fin Pilato decidi&oacute; concederles su demanda:<sup class="versenum">25&nbsp;</sup>solt&oacute; al hombre que le ped&iacute;an, el que por insurrecci&oacute;n y homicidio hab&iacute;a sido echado en la c&aacute;rcel, y dej&oacute; que hicieran con Jes&uacute;s lo que quisieran.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/hope/05.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 22:66-23:25&nbsp;</button>
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

			<td class="social" @click="share('lesson', 'Esperanza a través de la muerte: ', '/content/M2/spa/hope/hope05.html')">
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