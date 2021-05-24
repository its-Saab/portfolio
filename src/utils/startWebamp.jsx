//npm packages
import Webamp from 'webamp'

export const startWebamp = () => {
    if (Webamp.browserIsSupported()) {
        const webamp = new Webamp({
            initialTracks: [{
                metaData: {
                    artist: "GES",
                    title: "När vi graver guld i USA"
                },
                url:  "https://res.cloudinary.com/dlvwrtpzq/video/upload/v1621866661/GES_-_N%C3%A4r_vi_gr_ver_guld_i_USA_jhvzeb.mp3",
                duration: 367
            },{
                metaData: {
                    artist: "Shaggy",
                    title: "Boombastic"
                },
                url:  "https://res.cloudinary.com/dlvwrtpzq/video/upload/v1621629735/SHAGGY-BOOMBASTIC_y2itcr.mp3",
                duration: 237
            },
            {
                metaData: {
                    artist: "Dr-Dre ft Snoop_Dogg",
                    title: "Nuthin but a G Thang"
                },
                url:  "https://res.cloudinary.com/dlvwrtpzq/video/upload/v1621629852/Dr_Dre_ft_Snoop_Dogg_-_Nuthin_but_a_G_Thang_Qoret.com_ungite.mp3",
                duration: 237
            }]
        });
        webamp.onClose(() => {
            webamp.dispose();
        })

        webamp.renderWhenReady(document.getElementById('winamp-container'));

    }
}
