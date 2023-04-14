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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>El Espíritu Santo viene en Pentecostés</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 12: Opening Doors-->
<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">Mirando hacia atr&aacute;s</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Alabar</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<p class="back"><em>Lee un pasaje de las Escrituras y practiquen un canto de adoraci&oacute;n.</em></p>

<ul>
	<li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11b</span>;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp; </sup>&nbsp;...&nbsp; &nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6a)</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
	</div>
	</li>
</ul>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar a las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y aliento.</em></p>

<ul class="back">
	<li>Pida a cada persona que comparta un hecho destacado y un desaf&iacute;o que haya experimentado esta semana.</li>
	<li>Pregunta: &quot;&iquest;Qu&eacute; quieres que Jes&uacute;s haga por ti esta semana?&quot; Oren por las necesidades de los dem&aacute;s</li>
</ul>

<h2 class="back">Celebra la fidelidad</h2>

<p><em>Alentar la responsabilidad amorosa de obedecer a Jes&uacute;s</em></p>

<ul class="back">
	<li>Pregunta: &quot;&iquest;Qu&eacute; pas&oacute; cuando confiaste en Dios tus metas y tu declaraci&oacute;n: &ldquo;Yo har&eacute;&hellip;&rdquo;?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivaci&oacute;n y Animo</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p><em>Elija una manera de proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos al</em>:</p>

<ul>
	<li>Compartir un vers&iacute;culo B&iacute;blico que les recuerde el Coraz&oacute;n del Padre y la visi&oacute;n final.</li>
	<li>Reflexionando sobre los cambios en su vida desde que comenzaron a seguir a Cristo</li>
	<li>record&aacute;ndoles lo que Dios quiere hacer a trav&eacute;s de ellos</li>
</ul>

<p>Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada pueblo y comunidad, y el Evangelio para cada persona&quot;.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<ul>
	<li class="back">P&iacute;dale al grupo que cuente la historia de la semana pasada</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 2:1-13</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 2:1-13</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>El Esp&iacute;ritu Santo desciende en Pentecost&eacute;s</h3>

<p><sup class="versenum">1 </sup>Cuando lleg&oacute; el d&iacute;a de Pentecost&eacute;s, estaban todos juntos en el mismo lugar.<sup class="versenum">2&nbsp;</sup>De repente, vino del cielo un ruido como el de una violenta r&aacute;faga de viento y llen&oacute; toda la casa donde estaban reunidos.<sup class="versenum">3&nbsp;</sup>Se les aparecieron entonces unas lenguas como de fuego que se repartieron y se posaron sobre cada uno de ellos.<sup class="versenum">4&nbsp;</sup>Todos fueron llenos del Esp&iacute;ritu Santo y comenzaron a hablar en diferentes lenguas, seg&uacute;n el Esp&iacute;ritu les conced&iacute;a expresarse.</p>

<p><sup class="versenum">5&nbsp;</sup>Estaban de visita en Jerusal&eacute;n jud&iacute;os piadosos, procedentes de todas las naciones de la tierra.<sup class="versenum">6&nbsp;</sup>Al o&iacute;r aquel bullicio, se agolparon y quedaron todos pasmados porque cada uno los escuchaba hablar en su propio idioma.<sup class="versenum">7&nbsp;</sup>Desconcertados y maravillados, dec&iacute;an: &laquo;&iquest;No son galileos todos estos que est&aacute;n hablando?<sup class="versenum">8&nbsp;</sup>&iquest;C&oacute;mo es que cada uno de nosotros los oye hablar en su lengua materna?<sup class="versenum">9&nbsp;</sup>Partos, medos y elamitas; habitantes de Mesopotamia, de Judea y de Capadocia, del Ponto y de Asia,<sup class="versenum">10&nbsp;</sup>de Frigia y de Panfilia, de Egipto y de las regiones de Libia cercanas a Cirene; visitantes llegados de Roma;<sup class="versenum">11&nbsp;</sup>jud&iacute;os y pros&eacute;litos; cretenses y &aacute;rabes: &iexcl;todos por igual los o&iacute;mos proclamar en nuestra propia lengua las maravillas de Dios!&raquo;</p>

<p><sup class="versenum">12&nbsp;</sup>Desconcertados y perplejos, se preguntaban: &laquo;&iquest;Qu&eacute; quiere decir esto?&raquo;<sup class="versenum">13&nbsp;</sup>Otros se burlaban y dec&iacute;an: &laquo;Lo que pasa es que est&aacute;n borrachos&raquo;.</p>
<!-- end bible -->
<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/303.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 2:1-13&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Preguntas de Descubrimiento</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n o qu&eacute; es lo que m&aacute;s te gust&oacute;? &iquest;por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; hay de nuevo o se ha desarrollado a estas alturas de la historia?</li>
	<li>&iquest;Qu&eacute; se est&aacute; modelando acerca de una vida dependiente del Esp&iacute;ritu, haciendo disc&iacute;pulos o liderazgo?</li>
	<li>&iquest;C&oacute;mo podemos vivir de manera diferente ahora que conocemos esta historia?</li>
</ul>

<p>Preguntas adicionales que puede utilizar:</p>

<ul>
	<li>&iquest;C&oacute;mo contin&uacute;an los seguidores de Jes&uacute;s Su obra de hacer disc&iacute;pulos y plantar iglesias?</li>
	<li>&iquest;C&oacute;mo est&aacute; impactando el Evangelio en las personas y en la sociedad?</li>
	<li>&iquest;Qu&eacute; barreras u obst&aacute;culos se superaron y c&oacute;mo se superaron?</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="up">Leer, contar y corregir</h2>

<ul class="up">
	<li>Lea la historia de nuevo. P&iacute;dale a alguien que cuente la historia y p&iacute;dale al grupo que corrija si es necesario.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2 class="up">+ Resumen</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<ul>
	<li class="nobreak-final-final">Pentecost&eacute;s era una de las tres principales fiestas jud&iacute;as anuales y asist&iacute;a peregrinos jud&iacute;os de todas partes del mundo romano. Ocurre 50 d&iacute;as despu&eacute;s de la fiesta de Pascua y es el aniversario de la ocasi&oacute;n del Antiguo Testamento de Mois&eacute;s recibiendo la Ley de Dios (<span class="popup-link" @click = "popUp('pop3')"> &Eacute;xodo 20</span>).&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<h3>Los diez mandamientos</h3>

	<p><sup class="versenum">1 </sup>Dios habl&oacute;, y dio a conocer todos estos mandamientos:</p>

	<p><sup class="versenum">2&nbsp;</sup>&laquo;Yo soy el <span class="divine-name small-caps">Se&ntilde;or tu Dios. Yo te saqu&eacute; de Egipto, del pa&iacute;s donde eras esclavo.</span></p>

	<p><sup class="versenum">3&nbsp;</sup>&raquo;No tengas otros dioses adem&aacute;s de m&iacute;.</p>

	<p><sup class="versenum">4&nbsp;</sup>&raquo;No te hagas ning&uacute;n &iacute;dolo, ni nada que guarde semejanza con lo que hay arriba en el cielo, ni con lo que hay abajo en la tierra, ni con lo que hay en las aguas debajo de la tierra.<sup class="versenum">5&nbsp;</sup>No te inclines delante de ellos ni los adores. Yo, el <span class="divine-name small-caps">Se&ntilde;or tu Dios, soy un Dios celoso. Cuando los padres son malvados y me odian, yo castigo a sus hijos hasta la tercera y cuarta generaci&oacute;n.<sup class="versenum">6&nbsp;</sup>Por el contrario, cuando me aman y cumplen mis mandamientos, les muestro mi amor por mil generaciones.</span></p>

	<p><sup class="versenum">7&nbsp;</sup>&raquo;No uses el nombre del <span class="divine-name small-caps">Se&ntilde;or tu Dios en falso. Yo, el <span class="divine-name small-caps">Se&ntilde;or, no tendr&eacute; por inocente a quien se atreva a usar mi nombre en falso.</span></span></p>

	<p><sup class="versenum">8&nbsp;</sup>&raquo;Acu&eacute;rdate del s&aacute;bado, para consagrarlo.<sup class="versenum">9&nbsp;</sup>Trabaja seis d&iacute;as, y haz en ellos todo lo que tengas que hacer,<sup class="versenum">10&nbsp;</sup>pero el d&iacute;a s&eacute;ptimo ser&aacute; un d&iacute;a de reposo para honrar al <span class="divine-name small-caps">Se&ntilde;or tu Dios. No hagas en ese d&iacute;a ning&uacute;n trabajo, ni tampoco tu hijo, ni tu hija, ni tu esclavo, ni tu esclava, ni tus animales, ni tampoco los extranjeros que vivan en tus ciudades.<sup class="versenum">11&nbsp;</sup>Acu&eacute;rdate de que en seis d&iacute;as hizo el <span class="divine-name small-caps">Se&ntilde;or los cielos y la tierra, el mar y todo lo que hay en ellos, y que descans&oacute; el s&eacute;ptimo d&iacute;a. Por eso el <span class="divine-name small-caps">Se&ntilde;or bendijo y consagr&oacute; el d&iacute;a de reposo.</span></span></span></p>

	<p><sup class="versenum">12&nbsp;</sup>&raquo;Honra a tu padre y a tu madre, para que disfrutes de una larga vida en la tierra que te da el <span class="divine-name small-caps">Se&ntilde;or tu Dios.</span></p>

	<p><sup class="versenum">13&nbsp;</sup>&raquo;No mates.</p>

	<p><sup class="versenum">14&nbsp;</sup>&raquo;No cometas adulterio.</p>

	<p><sup class="versenum">15&nbsp;</sup>&raquo;No robes.</p>

	<p><sup class="versenum">16&nbsp;</sup>&raquo;No des falso testimonio en contra de tu pr&oacute;jimo.</p>

	<p><sup class="versenum">17&nbsp;</sup>&raquo;No codicies la casa de tu pr&oacute;jimo: No codicies su esposa, ni su esclavo, ni su esclava, ni su buey, ni su burro, ni nada que le pertenezca&raquo;.</p>
	</div>

	<h3>Reacci&oacute;n temerosa de los israelitas</h3>

	<p><sup class="versenum">18&nbsp;</sup>Ante ese espect&aacute;culo de truenos y rel&aacute;mpagos, de sonidos de trompeta y de la monta&ntilde;a envuelta en humo, los israelitas temblaban de miedo y se manten&iacute;an a distancia.<sup class="versenum">19&nbsp;</sup>As&iacute; que le suplicaron a Mois&eacute;s:</p>

	<p>&mdash;H&aacute;blanos t&uacute;, y te escucharemos. Si Dios nos habla, seguramente moriremos.</p>

	<p><sup class="versenum">20&nbsp;</sup>&mdash;No tengan miedo &mdash;les respondi&oacute; Mois&eacute;s&mdash;. Dios ha venido a ponerlos a prueba, para que sientan temor de &eacute;l y no pequen.</p>

	<p><sup class="versenum">21&nbsp;</sup>Entonces Mois&eacute;s se acerc&oacute; a la densa oscuridad en la que estaba Dios, pero los israelitas se mantuvieron a distancia.</p>

	<h3>El altar de piedra</h3>

	<p><sup class="versenum">22&nbsp;</sup>El <span class="divine-name small-caps">Se&ntilde;or le orden&oacute; a Mois&eacute;s:</span></p>

	<p>&laquo;Diles lo siguiente a los israelitas: &ldquo;Ustedes mismos han o&iacute;do que les he hablado desde el cielo.<sup class="versenum">23&nbsp;</sup>No me ofendan; no se hagan dioses de plata o de oro, ni los adoren.<sup class="versenum">24&nbsp;</sup>H&aacute;ganme un altar de tierra, y ofr&eacute;zcanme sobre &eacute;l sus holocaustos y sacrificios de comuni&oacute;n, sus ovejas y sus toros. Yo vendr&eacute; al lugar donde les pida invocar mi nombre, y los bendecir&eacute;.<sup class="versenum">25&nbsp;</sup>Si me hacen un altar de piedra, no lo construyan con piedras labradas, pues las herramientas profanan la piedra.<sup class="versenum">26&nbsp;</sup>Y no le pongan escalones a mi altar, no sea que al subir se les vean los genitales&rdquo;.</p>
	<!-- end bible --></div>
	&nbsp;120 hombres y mujeres se reunieron cuando vino el Esp&iacute;ritu. La noche en que Jes&uacute;s fue arrestado, &Eacute;l ense&ntilde;&oacute; a los disc&iacute;pulos que el Esp&iacute;ritu venidero ser&iacute;a otro ayudante que vivir&iacute;a en ellos (<span class="popup-link" @click = "popUp('pop4')"> Juan 14:16-17</span>).

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>Y yo le pedir&eacute; al Padre, y &eacute;l les dar&aacute; otro Consolador para que los acompa&ntilde;e siempre:<sup class="versenum">17&nbsp;</sup>el Esp&iacute;ritu de verdad, a quien el mundo no puede aceptar porque no lo ve ni lo conoce. Pero ustedes s&iacute; lo conocen, porque vive con ustedes y estar&aacute; en ustedes.</p>
	<!-- end bible --></div>
	Esta nueva relaci&oacute;n con el Esp&iacute;ritu Santo fue prometida cientos de a&ntilde;os antes a trav&eacute;s de profetas como Ezequiel. Lee <span class="popup-link" @click = "popUp('pop5')"> Ezequiel 36:26- 27</span>.&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">26&nbsp;</sup>Les dar&eacute; un nuevo coraz&oacute;n, y les infundir&eacute; un esp&iacute;ritu nuevo; les quitar&eacute; ese coraz&oacute;n de piedra que ahora tienen, y les pondr&eacute; un coraz&oacute;n de carne.<sup class="versenum">27&nbsp;</sup>Infundir&eacute; mi Esp&iacute;ritu en ustedes, y har&eacute; que sigan mis preceptos y obedezcan mis leyes.</p>
	<!-- end bible --></div>
	El Esp&iacute;ritu fue enviado para consolar, ense&ntilde;ar, guiar, convencer del pecado, producir fruto y empoderar a los disc&iacute;pulos para continuar la obra para la cual Jes&uacute;s los hab&iacute;a entrenado (<span class="popup-link" @click = "popUp('pop6')"> Juan 14-15</span>).&nbsp;

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<h3>Jes&uacute;s consuela a sus disc&iacute;pulos</h3>

	<p><sup class="versenum">1 </sup>&raquo;No se angustien. Conf&iacute;en en Dios, y conf&iacute;en tambi&eacute;n en m&iacute;.<sup class="versenum">2&nbsp;</sup>En el hogar de mi Padre hay muchas viviendas; si no fuera as&iacute;, ya se lo habr&iacute;a dicho a ustedes. Voy a prepararles un lugar.<sup class="versenum">3&nbsp;</sup>Y, si me voy y se lo preparo, vendr&eacute; para llev&aacute;rmelos conmigo. As&iacute; ustedes estar&aacute;n donde yo est&eacute;.<sup class="versenum">4&nbsp;</sup>Ustedes ya conocen el camino para ir adonde yo voy&raquo;.</p>

	<h3>Jes&uacute;s, el camino al Padre</h3>

	<p><sup class="versenum">5&nbsp;</sup>Dijo entonces Tom&aacute;s:</p>

	<p>&mdash;Se&ntilde;or, no sabemos a d&oacute;nde vas, as&iacute; que &iquest;c&oacute;mo podemos conocer el camino?</p>

	<p><sup class="versenum">6&nbsp;</sup>&mdash;Yo soy el camino, la verdad y la vida &mdash;le contest&oacute; Jes&uacute;s&mdash;. Nadie llega al Padre sino por m&iacute;.<sup class="versenum">7&nbsp;</sup>Si ustedes realmente me conocieran, conocer&iacute;an tambi&eacute;n a mi Padre. Y ya desde este momento lo conocen y lo han visto.</p>

	<p><sup class="versenum">8&nbsp;</sup>&mdash;Se&ntilde;or &mdash;dijo Felipe&mdash;, mu&eacute;stranos al Padre y con eso nos basta.</p>

	<p><sup class="versenum">9&nbsp;</sup>&mdash;&iexcl;Pero, Felipe! &iquest;Tanto tiempo llevo ya entre ustedes, y todav&iacute;a no me conoces? El que me ha visto a m&iacute; ha visto al Padre. &iquest;C&oacute;mo puedes decirme: &ldquo;Mu&eacute;stranos al Padre&rdquo;?<sup class="versenum">10&nbsp;</sup>&iquest;Acaso no crees que yo estoy en el Padre, y que el Padre est&aacute; en m&iacute;? Las palabras que yo les comunico, no las hablo como cosa m&iacute;a, sino que es el Padre, que est&aacute; en m&iacute;, el que realiza sus obras.<sup class="versenum">11&nbsp;</sup>Cr&eacute;anme cuando les digo que yo estoy en el Padre y que el Padre est&aacute; en m&iacute;; o al menos cr&eacute;anme por las obras mismas.<sup class="versenum">12&nbsp;</sup>Ciertamente les aseguro que el que cree en m&iacute; las obras que yo hago tambi&eacute;n &eacute;l las har&aacute;, y aun las har&aacute; mayores, porque yo vuelvo al Padre.<sup class="versenum">13&nbsp;</sup>Cualquier cosa que ustedes pidan en mi nombre, yo la har&eacute;; as&iacute; ser&aacute; glorificado el Padre en el Hijo.<sup class="versenum">14&nbsp;</sup>Lo que pidan en mi nombre, yo lo har&eacute;.</p>

	<h3>Jes&uacute;s promete el Esp&iacute;ritu Santo</h3>

	<p><sup class="versenum">15&nbsp;</sup>&raquo;Si ustedes me aman, obedecer&aacute;n mis mandamientos.<sup class="versenum">16&nbsp;</sup>Y yo le pedir&eacute; al Padre, y &eacute;l les dar&aacute; otro Consolador para que los acompa&ntilde;e siempre:<sup class="versenum">17&nbsp;</sup>el Esp&iacute;ritu de verdad, a quien el mundo no puede aceptar porque no lo ve ni lo conoce. Pero ustedes s&iacute; lo conocen, porque vive con ustedes y estar&aacute; en ustedes.<sup class="versenum">18&nbsp;</sup>No los voy a dejar hu&eacute;rfanos; volver&eacute; a ustedes.<sup class="versenum">19&nbsp;</sup>Dentro de poco el mundo ya no me ver&aacute; m&aacute;s, pero ustedes s&iacute; me ver&aacute;n. Y porque yo vivo, tambi&eacute;n ustedes vivir&aacute;n.<sup class="versenum">20&nbsp;</sup>En aquel d&iacute;a ustedes se dar&aacute;n cuenta de que yo estoy en mi Padre, y ustedes en m&iacute;, y yo en ustedes.<sup class="versenum">21&nbsp;</sup>&iquest;Qui&eacute;n es el que me ama? El que hace suyos mis mandamientos y los obedece. Y al que me ama, mi Padre lo amar&aacute;, y yo tambi&eacute;n lo amar&eacute; y me manifestar&eacute; a &eacute;l&raquo;.</p>

	<p><sup class="versenum">22&nbsp;</sup>Judas (no el Iscariote) le dijo:</p>

	<p>&mdash;&iquest;Por qu&eacute;, Se&ntilde;or, est&aacute;s dispuesto a manifestarte a nosotros, y no al mundo?</p>

	<p><sup class="versenum">23&nbsp;</sup>Le contest&oacute; Jes&uacute;s:</p>

	<p>&mdash;El que me ama, obedecer&aacute; mi palabra, y mi Padre lo amar&aacute;, y haremos nuestra morada en &eacute;l.<sup class="versenum">24&nbsp;</sup>El que no me ama, no obedece mis palabras. Pero estas palabras que ustedes oyen no son m&iacute;as, sino del Padre, que me envi&oacute;.</p>

	<p><sup class="versenum">25&nbsp;</sup>&raquo;Todo esto lo digo ahora que estoy con ustedes.<sup class="versenum">26&nbsp;</sup>Pero el Consolador, el Esp&iacute;ritu Santo, a quien el Padre enviar&aacute; en mi nombre, les ense&ntilde;ar&aacute; todas las cosas y les har&aacute; recordar todo lo que les he dicho.<sup class="versenum">27&nbsp;</sup>La paz les dejo; mi paz les doy. Yo no se la doy a ustedes como la da el mundo. No se angustien ni se acobarden.</p>

	<p><sup class="versenum">28&nbsp;</sup>&raquo;Ya me han o&iacute;do decirles: &ldquo;Me voy, pero vuelvo a ustedes&rdquo;. Si me amaran, se alegrar&iacute;an de que voy al Padre, porque el Padre es m&aacute;s grande que yo.<sup class="versenum">29&nbsp;</sup>Y les he dicho esto ahora, antes de que suceda, para que cuando suceda, crean.<sup class="versenum">30&nbsp;</sup>Ya no hablar&eacute; m&aacute;s con ustedes, porque viene el pr&iacute;ncipe de este mundo. &Eacute;l no tiene ning&uacute;n dominio sobre m&iacute;,<sup class="versenum">31&nbsp;</sup>pero el mundo tiene que saber que amo al Padre, y que hago exactamente lo que &eacute;l me ha ordenado que haga.</p>

	<p>&raquo;&iexcl;Lev&aacute;ntense, v&aacute;monos de aqu&iacute;!</p>

	<h3>Jes&uacute;s, la vid verdadera</h3>

	<p><sup class="versenum">1 </sup>&raquo;Yo soy la vid verdadera, y mi Padre es el labrador.<sup class="versenum">2&nbsp;</sup>Toda rama que en m&iacute; no da fruto, la corta; pero toda rama que da fruto la poda para que d&eacute; m&aacute;s fruto todav&iacute;a.<sup class="versenum">3&nbsp;</sup>Ustedes ya est&aacute;n limpios por la palabra que les he comunicado.<sup class="versenum">4&nbsp;</sup>Permanezcan en m&iacute;, y yo permanecer&eacute; en ustedes. As&iacute; como ninguna rama puede dar fruto por s&iacute; misma, sino que tiene que permanecer en la vid, as&iacute; tampoco ustedes pueden dar fruto si no permanecen en m&iacute;.</p>

	<p><sup class="versenum">5&nbsp;</sup>&raquo;Yo soy la vid y ustedes son las ramas. El que permanece en m&iacute;, como yo en &eacute;l, dar&aacute; mucho fruto; separados de m&iacute; no pueden ustedes hacer nada.<sup class="versenum">6&nbsp;</sup>El que no permanece en m&iacute; es desechado y se seca, como las ramas que se recogen, se arrojan al fuego y se queman.<sup class="versenum">7&nbsp;</sup>Si permanecen en m&iacute; y mis palabras permanecen en ustedes, pidan lo que quieran, y se les conceder&aacute;.<sup class="versenum">8&nbsp;</sup>Mi Padre es glorificado cuando ustedes dan mucho fruto y muestran as&iacute; que son mis disc&iacute;pulos.</p>

	<p><sup class="versenum">9&nbsp;</sup>&raquo;As&iacute; como el Padre me ha amado a m&iacute;, tambi&eacute;n yo los he amado a ustedes. Permanezcan en mi amor.<sup class="versenum">10&nbsp;</sup>Si obedecen mis mandamientos, permanecer&aacute;n en mi amor, as&iacute; como yo he obedecido los mandamientos de mi Padre y permanezco en su amor.<sup class="versenum">11&nbsp;</sup>Les he dicho esto para que tengan mi alegr&iacute;a y as&iacute; su alegr&iacute;a sea completa.<sup class="versenum">12&nbsp;</sup>Y este es mi mandamiento: que se amen los unos a los otros, como yo los he amado.<sup class="versenum">13&nbsp;</sup>Nadie tiene amor m&aacute;s grande que el dar la vida por sus amigos.<sup class="versenum">14&nbsp;</sup>Ustedes son mis amigos si hacen lo que yo les mando.<sup class="versenum">15&nbsp;</sup>Ya no los llamo siervos, porque el siervo no est&aacute; al tanto de lo que hace su amo; los he llamado amigos, porque todo lo que a mi Padre le o&iacute; decir se lo he dado a conocer a ustedes.<sup class="versenum">16&nbsp;</sup>No me escogieron ustedes a m&iacute;, sino que yo los escog&iacute; a ustedes y los comision&eacute; para que vayan y den fruto, un fruto que perdure. As&iacute; el Padre les dar&aacute; todo lo que le pidan en mi nombre.<sup class="versenum">17&nbsp;</sup>Este es mi mandamiento: que se amen los unos a los otros.</p>

	<p><sup class="versenum">18&nbsp;</sup>&raquo;Si el mundo los aborrece, tengan presente que antes que a ustedes, me aborreci&oacute; a m&iacute;.<sup class="versenum">19&nbsp;</sup>Si fueran del mundo, el mundo los amar&iacute;a como a los suyos. Pero ustedes no son del mundo, sino que yo los he escogido de entre el mundo. Por eso el mundo los aborrece.<sup class="versenum">20&nbsp;</sup>Recuerden lo que les dije: &ldquo;Ning&uacute;n siervo es m&aacute;s que su amo&rdquo;. Si a m&iacute; me han perseguido, tambi&eacute;n a ustedes los perseguir&aacute;n. Si han obedecido mis ense&ntilde;anzas, tambi&eacute;n obedecer&aacute;n las de ustedes.<sup class="versenum">21&nbsp;</sup>Los tratar&aacute;n as&iacute; por causa de mi nombre, porque no conocen al que me envi&oacute;.<sup class="versenum">22&nbsp;</sup>Si yo no hubiera venido ni les hubiera hablado, no ser&iacute;an culpables de pecado. Pero ahora no tienen excusa por su pecado.<sup class="versenum">23&nbsp;</sup>El que me aborrece a m&iacute; tambi&eacute;n aborrece a mi Padre.<sup class="versenum">24&nbsp;</sup>Si yo no hubiera hecho entre ellos las obras que ning&uacute;n otro antes ha realizado, no ser&iacute;an culpables de pecado. Pero ahora las han visto, y sin embargo a m&iacute; y a mi Padre nos han aborrecido.<sup class="versenum">25&nbsp;</sup>Pero esto sucede para que se cumpla lo que est&aacute; escrito en la ley de ellos: &ldquo;Me odiaron sin motivo&rdquo;.</p>

	<p><sup class="versenum">26&nbsp;</sup>&raquo;Cuando venga el Consolador, que yo les enviar&eacute; de parte del Padre, el Esp&iacute;ritu de verdad que procede del Padre, &eacute;l testificar&aacute; acerca de m&iacute;.<sup class="versenum">27&nbsp;</sup>Y tambi&eacute;n ustedes dar&aacute;n testimonio porque han estado conmigo desde el principio.</p>
	<!-- end bible --></div>
	&nbsp;Es a trav&eacute;s de la presencia y el poder del Esp&iacute;ritu que tanto hombres como mujeres contin&uacute;an la misi&oacute;n de Jes&uacute;s.

	<p class="up"><em>Practique el dar y la Santa Cena aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

	</li>
</ul>
</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practique las habilidades necesarias o temas previos para ayudar a prepararse para ministrar a los dem&aacute;s:
	<ul>
		<li>Orar, Cuidar, Compartir</li>
		<li>Evangelio</li>
		<li>Estudios B&iacute;blicos Fundamentales</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica personas o lugares a los que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba declaraciones usando de &quot;Yo har&eacute;&hellip;. cuando&hellip;&rdquo; y que lo comparan con a su grupo.</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">Orando por la Misi&oacute;n</h2>

<ul class="forward">
	<li>Comprometa las metas de todos al Se&ntilde;or. P&iacute;dele al Se&ntilde;or que nos ayude a ser fieles y que nos use para iniciar un movimiento de hacedores de disc&iacute;pulos.</li>
</ul>

<h2>Bendici&oacute;n (opcional)</h2>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'El Espíritu Santo viene en Pentecostés: ', '/content/M2/spa/multiply3/multiply303.html')">
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