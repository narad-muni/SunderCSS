var Ansh = {
    "$font": {
        "dArgs": "black black 2rem",
        "css": "c_$1 :h:c_$2 ftsz_$3"
    },
    "$resp": {
        "dArgs": "1rem 1rem .5rem .25rem",
        "css": "ftsz_$1 (lg)[ftsz_$2] (md)[ftsz_$3] (sm)[ftsz_$4]"
    },
    "$input": {
        "dArgs": "red aqua aquamarine 1rem",
        "css": "c_$1 b_2px`solid`$2 :f:out_none:b_2px`solid`$4:bsh_0`0`0`calc($4*.2)`rgb($3,25%) trndu_.4s brad_5px"
    },
    "$btn": {
        "dArgs": "red blue cyan 25 1rem",
        "css": "bg_$1 brad_.1rem b_2px`solid`$2 bsh_0`0`0`$5`rgb($3,$4%)"
    },
    "$filter": {
        "dArgs": "",
        "css": "filter_hue-rotate(var(--hr))`invert(var(--in))`grayscale(var(--gs))`blur(var(--bl))`opacity(var(--op))`contrast(var(--cn))`brightness(var(--bh)) --op_1 --bl_0 --gs_0 --in_0 --bh_1 --cn_1 --hr_0"
    },
    "$hue": {
        "dArgs": "0",
        "css": "--hr_$1deg"
    },
    "$opacity": {
        "dArgs": "1",
        "css": "--op_$1%"
    },
    "$bw": {
        "dArgs": "0",
        "css": "--gs_$1%"
    },
    "$invert": {
        "dArgs": "0",
        "css": "--in_$1%"
    },
    "$blur": {
        "dArgs": "0",
        "css": "--bl_$1"
    },
    "$contrast": {
        "dArgs": "0",
        "css": "--cn_$1%"
    },
    "$bright": {
        "dArgs": "0",
        "css": "--bh_$1%"
    },
    "$transform": {
        "dArgs": "",
        "css": "tr_translate"
    }
};
var Anupranan = {
    "&spin": {
        "dArgs": "red blue cyan",
        "states": {
            "from": "c_$1 bg_$3",
            "to": "c_$2 bg_$1"
        }
    },
    "&bounce": {
        "dArgs": "red blue",
        "states": {
            "0%": "c_$1",
            "50%": "c_$2",
            "100%": "c_$1"
        }
    },
    "&float": {
        "dArgs": "0rem 10rem",
        "states": {
            "0%": "tr_translateY($1)",
            "50%": "tr_translateY($2)",
            "100%": "tr_translateY($1)"
        }
    }
}