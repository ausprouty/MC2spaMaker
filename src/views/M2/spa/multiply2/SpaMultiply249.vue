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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>49.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo crucificado</h1></div>
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
	<li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11</span>;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp;</sup>y toda lengua confiese que Jesucristo es el Se&ntilde;or,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6</span>)</li>
</ul>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
<!-- end bible --></div>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y &aacute;nimo.</em></p>

<ul class="back">
	<li>Pida a cada persona que comparta un hecho destacado y un desaf&iacute;o que haya experimentado esta semana.</li>
	<li>Pregunta: &quot;&iquest;Qu&eacute; quieres que Jes&uacute;s haga por ti esta semana?&quot; Oren por las necesidades de los dem&aacute;s.</li>
</ul>

<h2 class="back">Celebra la fidelidad</h2>

<p><em>Alentar la responsabilidad amorosa de obedecer a Jes&uacute;s</em></p>

<ul class="back">
	<li>Pregunte: &quot;&iquest;Qu&eacute; pas&oacute; cuando confiaste en Dios tus metas y tus declaraciones: Yo har&eacute;&hellip; cu&aacute;ndo&hellip;?&quot;</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivaci&oacute;n y est&iacute;mulo</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back">Elija una manera de proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos al:</p>

<ul>
	<li class="back">Compartir un vers&iacute;culo B&iacute;blico que les recuerde el Coraz&oacute;n del Padre y la visi&oacute;n final, o</li>
	<li class="back">reflexionando sobre los cambios en su vida desde que comenzaron a seguir a Cristo, o</li>
	<li class="back">record&aacute;ndoles lo que Dios quiere hacer a trav&eacute;s de ellos.</li>
</ul>

<p class="back">Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada ciudad y comunidad, y el Evangelio para cada persona&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<ul>
	<li class="back">P&iacute;dale al grupo que cuente la historia de la semana pasada.</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Juan 19:13-30; Mateo 27:45-46</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 19:13-30</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<p><sup class="versenum">13&nbsp;</sup>Al o&iacute;r esto, Pilato llev&oacute; a Jes&uacute;s hacia fuera y se sent&oacute; en el tribunal, en un lugar al que llamaban el Empedrado (que en arameo se dice Gabat&aacute;).<sup class="versenum">14&nbsp;</sup>Era el d&iacute;a de la preparaci&oacute;n para la Pascua, cerca del mediod&iacute;a.</p>

<p>&mdash;Aqu&iacute; tienen a su rey &mdash;dijo Pilato a los jud&iacute;os.</p>

<p><sup class="versenum">15&nbsp;</sup>&mdash;&iexcl;Fuera! &iexcl;Fuera! &iexcl;Crucif&iacute;calo! &mdash;vociferaron.</p>

<p>&mdash;&iquest;Acaso voy a crucificar a su rey? &mdash;replic&oacute; Pilato.</p>

<p>&mdash;No tenemos m&aacute;s rey que el emperador romano &mdash;contestaron los jefes de los sacerdotes.</p>

<p><sup class="versenum">16&nbsp;</sup>Entonces Pilato se lo entreg&oacute; para que lo crucificaran, y los soldados se lo llevaron.</p>

<h3>La crucifixi&oacute;n</h3>

<p><sup class="versenum">17&nbsp;</sup>Jes&uacute;s sali&oacute; cargando su propia cruz hacia el lugar de la Calavera (que en arameo se llama G&oacute;lgota).<sup class="versenum">18&nbsp;</sup>All&iacute; lo crucificaron, y con &eacute;l a otros dos, uno a cada lado y Jes&uacute;s en medio.</p>

<p><sup class="versenum">19&nbsp;</sup>Pilato mand&oacute; que se pusiera sobre la cruz un letrero en el que estuviera escrito: &laquo;<span class="small-caps">Jes&uacute;s de Nazaret, Rey de los jud&iacute;os&raquo;.<sup class="versenum">20&nbsp;</sup>Muchos de los jud&iacute;os lo leyeron, porque el sitio en que crucificaron a Jes&uacute;s estaba cerca de la ciudad. El letrero estaba escrito en arameo, lat&iacute;n y griego.</span></p>

<p><sup class="versenum">21&nbsp;</sup>&mdash;No escribas &ldquo;Rey de los jud&iacute;os&rdquo; &mdash;protestaron ante Pilato los jefes de los sacerdotes jud&iacute;os&mdash;. Era &eacute;l quien dec&iacute;a ser rey de los jud&iacute;os.</p>

<p><sup class="versenum">22&nbsp;</sup>&mdash;Lo que he escrito, escrito queda &mdash;les contest&oacute; Pilato.</p>

<p><sup class="versenum">23&nbsp;</sup>Cuando los soldados crucificaron a Jes&uacute;s, tomaron su manto y lo partieron en cuatro partes, una para cada uno de ellos. Tomaron tambi&eacute;n la t&uacute;nica, la cual no ten&iacute;a costura, sino que era de una sola pieza, tejida de arriba abajo.</p>

<p><sup class="versenum">24&nbsp;</sup>&mdash;No la dividamos &mdash;se dijeron unos a otros&mdash;. Echemos suertes para ver a qui&eacute;n le toca.</p>

<p>Y as&iacute; lo hicieron los soldados. Esto sucedi&oacute; para que se cumpliera la Escritura que dice:</p>

<p>&laquo;Se repartieron entre ellos mi manto,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y sobre mi ropa echaron suertes&raquo;.</p>
</div>

<p><sup class="versenum">25&nbsp;</sup>Junto a la cruz de Jes&uacute;s estaban su madre, la hermana de su madre, Mar&iacute;a la esposa de Cleofas, y Mar&iacute;a Magdalena.<sup class="versenum">26&nbsp;</sup>Cuando Jes&uacute;s vio a su madre, y a su lado al disc&iacute;pulo a quien &eacute;l amaba, dijo a su madre:</p>

<p>&mdash;Mujer, ah&iacute; tienes a tu hijo.</p>

<p><sup class="versenum">27&nbsp;</sup>Luego dijo al disc&iacute;pulo:</p>

<p>&mdash;Ah&iacute; tienes a tu madre.</p>

<p>Y desde aquel momento ese disc&iacute;pulo la recibi&oacute; en su casa.</p>

<h3>Muerte de Jes&uacute;s</h3>

<p><sup class="versenum">28&nbsp;</sup>Despu&eacute;s de esto, como Jes&uacute;s sab&iacute;a que ya todo hab&iacute;a terminado, y para que se cumpliera la Escritura, dijo:</p>

<p>&mdash;Tengo sed.</p>

<p><sup class="versenum">29&nbsp;</sup>Hab&iacute;a all&iacute; una vasija llena de vinagre; as&iacute; que empaparon una esponja en el vinagre, la pusieron en una ca&ntilde;a y se la acercaron a la boca.<sup class="versenum">30&nbsp;</sup>Al probar Jes&uacute;s el vinagre, dijo:</p>

<p>&mdash;Todo se ha cumplido.</p>

<p>Luego inclin&oacute; la cabeza y entreg&oacute; el esp&iacute;ritu.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/249.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 19:13-30&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">Lee Mateo 27:45-46</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<h3>Muerte de Jes&uacute;s</h3>

<p><sup class="versenum">45&nbsp;</sup>Desde el mediod&iacute;a y hasta la media tarde toda la tierra qued&oacute; en oscuridad.<sup class="versenum">46&nbsp;</sup>Como a las tres de la tarde, Jes&uacute;s grit&oacute; con fuerza:</p>

<p>&mdash;<em class="transliteration">El&iacute;, El&iacute;,</em> <em class="transliteration">&iquest;lama sabactani?</em> (que significa: &ldquo;Dios m&iacute;o, Dios m&iacute;o, &iquest;por qu&eacute; me has desamparado?&rdquo;).</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/249-1.mp4" type="button" class="external-movie">
         Mira &nbsp;Mateo 27:45-46&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discusi&oacute;n de descubrimiento</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n o qu&eacute; es lo que m&aacute;s te gust&oacute;? &iquest;Por qu&eacute;?</li>
	<li>&iquest;Hay algo nuevo o algo que ha desarrollado hasta este punto de la historia de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendemos acerca de la humanidad o divinidad de Jes&uacute;s en este pasaje?</li>
	<li>&iquest;C&oacute;mo podemos vivir de manera diferente ahora que conocemos esta historia?</li>
</ul>

<p><em>Preguntas adicionales que puede utilizar:</em></p>

<ul>
	<li>&iquest;Qu&eacute; est&aacute;n aprendiendo sus seguidores?</li>
	<li>&iquest;Qu&eacute; es lo que Jes&uacute;s nos est&aacute; modelando acerca de la vida, el ministerio o el liderazgo piadoso?</li>
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

<p class="up">Jes&uacute;s fue traicionado, mentido, tratado injustamente, golpeado, azotado y finalmente clavado en una cruz para morir entre dos criminales. En Su humanidad, Jes&uacute;s sufri&oacute; mucho en esas &uacute;ltimas horas de vida. Dios puso el pecado del mundo en Jes&uacute;s como un sustituto inocente para nosotros. Jes&uacute;s sufri&oacute; la separaci&oacute;n del Padre por primera vez. Fue abandonado por el Padre, quien le dio la espalda a Jes&uacute;s porque Jes&uacute;s llevaba todo el peso del pecado del mundo. El Cordero de Dios de Pascua derram&oacute; Su sangre y el velo del templo fue rasgado. Jes&uacute;s fue el &uacute;ltimo sacrificio. Ahora tenemos acceso al Dios viviente. Los que creen han sido adoptados en esta nueva familia. &Eacute;l hizo un camino al Padre. &Eacute;l dio Su vida para pagar nuestra deuda. En la cruz ocurri&oacute; un gran intercambio: &quot;Dios hizo que el que no ten&iacute;a pecado fuera pecado para que pudi&eacute;ramos llegar a ser la justicia de Dios&quot;. (<span class="popup-link" @click = "popUp('pop3')"> 2 Corintios 5:21</span>).</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">21&nbsp;</sup>Al que no cometi&oacute; pecado alguno, por nosotros Dios lo trat&oacute; como pecador, para que en &eacute;l recibi&eacute;ramos la justicia de Dios.</p>
<!-- end bible --></div>

<ul>
	<li class="nobreak-final-final">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop4')"> Lucas 23:26-49</span>;&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<h3>La crucifixi&oacute;n</h3>

	<p><sup class="versenum">26&nbsp;</sup>Cuando se lo llevaban, echaron mano de un tal Sim&oacute;n de Cirene, que volv&iacute;a del campo, y le cargaron la cruz para que la llevara detr&aacute;s de Jes&uacute;s.<sup class="versenum">27&nbsp;</sup>Lo segu&iacute;a mucha gente del pueblo, incluso mujeres que se golpeaban el pecho, lament&aacute;ndose por &eacute;l.<sup class="versenum">28&nbsp;</sup>Jes&uacute;s se volvi&oacute; hacia ellas y les dijo:</p>

	<p>&mdash;Hijas de Jerusal&eacute;n, no lloren por m&iacute;; lloren m&aacute;s bien por ustedes y por sus hijos.<sup class="versenum">29&nbsp;</sup>Miren, va a llegar el tiempo en que se dir&aacute;: &ldquo;&iexcl;Dichosas las est&eacute;riles, que nunca dieron a luz ni amamantaron!&rdquo;<sup class="versenum">30&nbsp;</sup>Entonces</p>

	<p>&raquo;&ldquo;dir&aacute;n a las monta&ntilde;as: &lsquo;&iexcl;Caigan sobre nosotros!&rsquo;,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y a las colinas: &lsquo;&iexcl;C&uacute;brannos!&rsquo; &rdquo;</p>
	</div>

	<p><sup class="versenum">31&nbsp;</sup>Porque, si esto se hace cuando el &aacute;rbol est&aacute; verde, &iquest;qu&eacute; no suceder&aacute; cuando est&eacute; seco?&raquo;</p>

	<p><sup class="versenum">32&nbsp;</sup>Tambi&eacute;n llevaban con &eacute;l a otros dos, ambos criminales, para ser ejecutados.<sup class="versenum">33&nbsp;</sup>Cuando llegaron al lugar llamado la Calavera, lo crucificaron all&iacute;, junto con los criminales, uno a su derecha y otro a su izquierda.</p>

	<p><sup class="versenum">34&nbsp;</sup>&mdash;Padre &mdash;dijo Jes&uacute;s&mdash;, perd&oacute;nalos, porque no saben lo que hacen.</p>

	<p>Mientras tanto, echaban suertes para repartirse entre s&iacute; la ropa de Jes&uacute;s.</p>

	<p><sup class="versenum">35&nbsp;</sup>La gente, por su parte, se qued&oacute; all&iacute; observando, y aun los gobernantes estaban burl&aacute;ndose de &eacute;l.</p>

	<p>&mdash;Salv&oacute; a otros &mdash;dec&iacute;an&mdash;; que se salve a s&iacute; mismo si es el Cristo de Dios, el Escogido.</p>

	<p><sup class="versenum">36&nbsp;</sup>Tambi&eacute;n los soldados se acercaron para burlarse de &eacute;l. Le ofrecieron vinagre<sup class="versenum">37&nbsp;</sup>y le dijeron:</p>

	<p>&mdash;Si eres el rey de los jud&iacute;os, s&aacute;lvate a ti mismo.</p>

	<p><sup class="versenum">38&nbsp;</sup>Resulta que hab&iacute;a sobre &eacute;l un letrero, que dec&iacute;a: &laquo;<span class="small-caps">Este es el Rey de los jud&iacute;os&raquo;.</span></p>

	<p><sup class="versenum">39&nbsp;</sup>Uno de los criminales all&iacute; colgados empez&oacute; a insultarlo:</p>

	<p>&mdash;&iquest;No eres t&uacute; el Cristo? &iexcl;S&aacute;lvate a ti mismo y a nosotros!</p>

	<p><sup class="versenum">40&nbsp;</sup>Pero el otro criminal lo reprendi&oacute;:</p>

	<p>&mdash;&iquest;Ni siquiera temor de Dios tienes, aunque sufres la misma condena?<sup class="versenum">41&nbsp;</sup>En nuestro caso, el castigo es justo, pues sufrimos lo que merecen nuestros delitos; este, en cambio, no ha hecho nada malo.</p>

	<p><sup class="versenum">42&nbsp;</sup>Luego dijo:</p>

	<p>&mdash;Jes&uacute;s, acu&eacute;rdate de m&iacute; cuando vengas en tu reino.</p>

	<p><sup class="versenum">43&nbsp;</sup>&mdash;Te aseguro que hoy estar&aacute;s conmigo en el para&iacute;so &mdash;le contest&oacute; Jes&uacute;s.</p>

	<p><sup class="versenum">44&nbsp;</sup>Desde el mediod&iacute;a y hasta la media tarde toda la tierra qued&oacute; sumida en la oscuridad,<sup class="versenum">45&nbsp;</sup>pues el sol se ocult&oacute;. Y la cortina del santuario del templo se rasg&oacute; en dos.<sup class="versenum">46&nbsp;</sup>Entonces Jes&uacute;s exclam&oacute; con fuerza:</p>

	<p>&mdash;&iexcl;Padre, en tus manos encomiendo mi esp&iacute;ritu!</p>

	<p>Y al decir esto, expir&oacute;.</p>

	<p><sup class="versenum">47&nbsp;</sup>El centuri&oacute;n, al ver lo que hab&iacute;a sucedido, alab&oacute; a Dios y dijo:</p>

	<p>&mdash;Verdaderamente este hombre era justo.</p>

	<p><sup class="versenum">48&nbsp;</sup>Entonces los que se hab&iacute;an reunido para presenciar aquel espect&aacute;culo, al ver lo ocurrido, se fueron de all&iacute; golpe&aacute;ndose el pecho.<sup class="versenum">49&nbsp;</sup>Pero todos los conocidos de Jes&uacute;s, incluso las mujeres que lo hab&iacute;an seguido desde Galilea, se quedaron mirando desde lejos.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> Mateo 27:27-56</span>;&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<h3>Los soldados se burlan de Jes&uacute;s</h3>

	<p><sup class="versenum">27&nbsp;</sup>Los soldados del gobernador llevaron a Jes&uacute;s al palacio y reunieron a toda la tropa alrededor de &eacute;l.<sup class="versenum">28&nbsp;</sup>Le quitaron la ropa y le pusieron un manto de color escarlata.<sup class="versenum">29&nbsp;</sup>Luego trenzaron una corona de espinas y se la colocaron en la cabeza, y en la mano derecha le pusieron una ca&ntilde;a. Arrodill&aacute;ndose delante de &eacute;l, se burlaban diciendo:</p>

	<p>&mdash;&iexcl;Salve, rey de los jud&iacute;os!</p>

	<p><sup class="versenum">30&nbsp;</sup>Y le escup&iacute;an, y con la ca&ntilde;a le golpeaban la cabeza.<sup class="versenum">31&nbsp;</sup>Despu&eacute;s de burlarse de &eacute;l, le quitaron el manto, le pusieron su propia ropa y se lo llevaron para crucificarlo.</p>

	<h3>La crucifixi&oacute;n</h3>

	<p><sup class="versenum">32&nbsp;</sup>Al salir encontraron a un hombre de Cirene que se llamaba Sim&oacute;n, y lo obligaron a llevar la cruz.<sup class="versenum">33&nbsp;</sup>Llegaron a un lugar llamado G&oacute;lgota (que significa &laquo;Lugar de la Calavera&raquo;).<sup class="versenum">34&nbsp;</sup>All&iacute; le dieron a Jes&uacute;s vino mezclado con hiel; pero, despu&eacute;s de probarlo, se neg&oacute; a beberlo.<sup class="versenum">35&nbsp;</sup>Lo crucificaron y repartieron su ropa echando suertes.<sup class="versenum">36&nbsp;</sup>Y se sentaron a vigilarlo.<sup class="versenum">37&nbsp;</sup>Encima de su cabeza pusieron por escrito la causa de su condena: &laquo;<span class="small-caps">Este es Jes&uacute;s, el Rey de los jud&iacute;os&raquo;.<sup class="versenum">38&nbsp;</sup>Con &eacute;l crucificaron a dos bandidos, uno a su derecha y otro a su izquierda.<sup class="versenum">39&nbsp;</sup>Los que pasaban meneaban la cabeza y blasfemaban contra &eacute;l:</span></p>

	<p><sup class="versenum">40&nbsp;</sup>&mdash;T&uacute;, que destruyes el templo y en tres d&iacute;as lo reconstruyes, &iexcl;s&aacute;lvate a ti mismo! &iexcl;Si eres el Hijo de Dios, baja de la cruz!</p>

	<p><sup class="versenum">41&nbsp;</sup>De la misma manera se burlaban de &eacute;l los jefes de los sacerdotes, junto con los maestros de la ley y los ancianos.</p>

	<p><sup class="versenum">42&nbsp;</sup>&mdash;Salv&oacute; a otros &mdash;dec&iacute;an&mdash;, &iexcl;pero no puede salvarse a s&iacute; mismo! &iexcl;Y es el Rey de Israel! Que baje ahora de la cruz, y as&iacute; creeremos en &eacute;l.<sup class="versenum">43&nbsp;</sup>&Eacute;l conf&iacute;a en Dios; pues que lo libre Dios ahora, si de veras lo quiere. &iquest;Acaso no dijo: &ldquo;Yo soy el Hijo de Dios&rdquo;?</p>

	<p><sup class="versenum">44&nbsp;</sup>As&iacute; tambi&eacute;n lo insultaban los bandidos que estaban crucificados con &eacute;l.</p>

	<p><sup class="versenum">45&nbsp;</sup>Desde el mediod&iacute;a y hasta la media tarde toda la tierra qued&oacute; en oscuridad.<sup class="versenum">46&nbsp;</sup>Como a las tres de la tarde, Jes&uacute;s grit&oacute; con fuerza:</p>

	<p>&mdash;<em class="transliteration">El&iacute;, El&iacute;,</em> <em class="transliteration">&iquest;lama sabactani?</em> (que significa: &ldquo;Dios m&iacute;o, Dios m&iacute;o, &iquest;por qu&eacute; me has desamparado?&rdquo;).</p>

	<p><sup class="versenum">47&nbsp;</sup>Cuando lo oyeron, algunos de los que estaban all&iacute; dijeron:</p>

	<p>&mdash;Est&aacute; llamando a El&iacute;as.</p>

	<p><sup class="versenum">48&nbsp;</sup>Al instante uno de ellos corri&oacute; en busca de una esponja. La empap&oacute; en vinagre, la puso en una ca&ntilde;a y se la ofreci&oacute; a Jes&uacute;s para que bebiera.<sup class="versenum">49&nbsp;</sup>Los dem&aacute;s dec&iacute;an:</p>

	<p>&mdash;D&eacute;jalo, a ver si viene El&iacute;as a salvarlo.</p>

	<p><sup class="versenum">50&nbsp;</sup>Entonces Jes&uacute;s volvi&oacute; a gritar con fuerza, y entreg&oacute; su esp&iacute;ritu.</p>

	<p><sup class="versenum">51&nbsp;</sup>En ese momento la cortina del santuario del templo se rasg&oacute; en dos, de arriba abajo. La tierra tembl&oacute; y se partieron las rocas.<sup class="versenum">52&nbsp;</sup>Se abrieron los sepulcros, y muchos santos que hab&iacute;an muerto resucitaron.<sup class="versenum">53&nbsp;</sup>Salieron de los sepulcros y, despu&eacute;s de la resurrecci&oacute;n de Jes&uacute;s, entraron en la ciudad santa y se aparecieron a muchos.</p>

	<p><sup class="versenum">54&nbsp;</sup>Cuando el centuri&oacute;n y los que con &eacute;l estaban custodiando a Jes&uacute;s vieron el terremoto y todo lo que hab&iacute;a sucedido, quedaron aterrados y exclamaron:</p>

	<p>&mdash;&iexcl;Verdaderamente este era el Hijo de Dios!</p>

	<p><sup class="versenum">55&nbsp;</sup>Estaban all&iacute;, mirando de lejos, muchas mujeres que hab&iacute;an seguido a Jes&uacute;s desde Galilea para servirle.<sup class="versenum">56&nbsp;</sup>Entre ellas se encontraban Mar&iacute;a Magdalena, Mar&iacute;a la madre de Jacobo y de Jos&eacute;, y la madre de los hijos de Zebedeo.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop6')"> Marcos 15:16-41</span>.

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<h3>Los soldados se burlan de Jes&uacute;s</h3>

	<p><sup class="versenum">16&nbsp;</sup>Los soldados llevaron a Jes&uacute;s al interior del palacio (es decir, al pretorio) y reunieron a toda la tropa.<sup class="versenum">17&nbsp;</sup>Le pusieron un manto de color p&uacute;rpura; luego trenzaron una corona de espinas, y se la colocaron.</p>

	<p><sup class="versenum">18&nbsp;</sup>&mdash;&iexcl;Salve, rey de los jud&iacute;os! &mdash;lo aclamaban.</p>

	<p><sup class="versenum">19&nbsp;</sup>Lo golpeaban en la cabeza con una ca&ntilde;a y le escup&iacute;an. Doblando la rodilla, le rend&iacute;an homenaje.<sup class="versenum">20&nbsp;</sup>Despu&eacute;s de burlarse de &eacute;l, le quitaron el manto y le pusieron su propia ropa. Por fin, lo sacaron para crucificarlo.</p>

	<h3>La crucifixi&oacute;n</h3>

	<p><sup class="versenum">21&nbsp;</sup>A uno que pasaba por all&iacute; de vuelta del campo, un tal Sim&oacute;n de Cirene, padre de Alejandro y de Rufo, lo obligaron a llevar la cruz.<sup class="versenum">22&nbsp;</sup>Condujeron a Jes&uacute;s al lugar llamado G&oacute;lgota (que significa: Lugar de la Calavera).<sup class="versenum">23&nbsp;</sup>Le ofrecieron vino mezclado con mirra, pero no lo tom&oacute;.<sup class="versenum">24&nbsp;</sup>Y lo crucificaron. Repartieron su ropa, echando suertes para ver qu&eacute; le tocar&iacute;a a cada uno.</p>

	<p><sup class="versenum">25&nbsp;</sup>Eran las nueve de la ma&ntilde;ana cuando lo crucificaron.<sup class="versenum">26&nbsp;</sup>Un letrero ten&iacute;a escrita la causa de su condena: &laquo;<span class="small-caps">El Rey de los jud&iacute;os&raquo;.<sup class="versenum">27&nbsp;</sup>Con &eacute;l crucificaron a dos bandidos, uno a su derecha y otro a su izquierda.<sup class="versenum">29&nbsp;</sup>Los que pasaban meneaban la cabeza y blasfemaban contra &eacute;l.</span></p>

	<p>&mdash;&iexcl;Eh! T&uacute; que destruyes el templo y en tres d&iacute;as lo reconstruyes &mdash;dec&iacute;an&mdash;,<sup class="versenum">30&nbsp;</sup>&iexcl;baja de la cruz y s&aacute;lvate a ti mismo!</p>

	<p><sup class="versenum">31&nbsp;</sup>De la misma manera se burlaban de &eacute;l los jefes de los sacerdotes junto con los maestros de la ley.</p>

	<p>&mdash;Salv&oacute; a otros &mdash;dec&iacute;an&mdash;, &iexcl;pero no puede salvarse a s&iacute; mismo!<sup class="versenum">32&nbsp;</sup>Que baje ahora de la cruz ese Cristo, el rey de Israel, para que veamos y creamos.</p>

	<p>Tambi&eacute;n lo insultaban los que estaban crucificados con &eacute;l.</p>

	<p><sup class="versenum">33&nbsp;</sup>Desde el mediod&iacute;a y hasta la media tarde qued&oacute; toda la tierra en oscuridad.<sup class="versenum">34&nbsp;</sup>A las tres de la tarde Jes&uacute;s grit&oacute; a voz en cuello:</p>

	<p>&mdash;<em class="transliteration">Eloi, Eloi, &iquest;lama sabactani?</em> (que significa: &ldquo;Dios m&iacute;o, Dios m&iacute;o, &iquest;por qu&eacute; me has desamparado?&rdquo;).</p>

	<p><sup class="versenum">35&nbsp;</sup>Cuando lo oyeron, algunos de los que estaban cerca dijeron:</p>

	<p>&mdash;Escuchen, est&aacute; llamando a El&iacute;as.</p>

	<p><sup class="versenum">36&nbsp;</sup>Un hombre corri&oacute;, empap&oacute; una esponja en vinagre, la puso en una ca&ntilde;a y se la ofreci&oacute; a Jes&uacute;s para que bebiera.</p>

	<p>&mdash;D&eacute;jenlo, a ver si viene El&iacute;as a bajarlo &mdash;dijo.</p>

	<p><sup class="versenum">37&nbsp;</sup>Entonces Jes&uacute;s, lanzando un fuerte grito, expir&oacute;.</p>

	<p><sup class="versenum">38&nbsp;</sup>La cortina del santuario del templo se rasg&oacute; en dos, de arriba abajo.<sup class="versenum">39&nbsp;</sup>Y el centuri&oacute;n, que estaba frente a Jes&uacute;s, al o&iacute;r el grito y ver c&oacute;mo muri&oacute;, dijo:</p>

	<p>&mdash;&iexcl;Verdaderamente este hombre era el Hijo de Dios!</p>

	<p><sup class="versenum">40&nbsp;</sup>Algunas mujeres miraban desde lejos. Entre ellas estaban Mar&iacute;a Magdalena, Mar&iacute;a la madre de Jacobo el menor y de Jos&eacute;, y Salom&eacute;.<sup class="versenum">41&nbsp;</sup>Estas mujeres lo hab&iacute;an seguido y atendido cuando estaba en Galilea. Adem&aacute;s hab&iacute;a all&iacute; muchas otras que hab&iacute;an subido con &eacute;l a Jerusal&eacute;n.</p>
	<!-- end bible --></div>
	</li>
</ul>
</div>

<p><em>Practique la entrega y la comuni&oacute;n aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p class="up">Practique las habilidades necesarias o temas previos para ayudar a prepararse para ministrar a los dem&aacute;s:</p>

<ul class="forward">
	<li class="up">Orar, Cuidar, Compartir</li>
	<li class="up">Compartir el Evangelio</li>
	<li class="up">Estudios B&iacute;blicos Fundacionales</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica personas o lugares a los que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba sus declaraciones de &ldquo;Yo har&eacute;&hellip;para cuando&hellip;&rdquo; y comp&aacute;rtala en su peque&ntilde;o grupo.</li>
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
	<li>Comprometa las metas de todos con el Se&ntilde;or. P&iacute;dele al Se&ntilde;or que nos ayude a ser fieles y &uacute;sanos para iniciar un movimiento de hacedores de disc&iacute;pulos.</li>
</ul>

<h2>Bendici&oacute;n (opcional)</h2>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Liderazgo crucificado: ', '/content/M2/spa/multiply2/multiply249.html')">
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