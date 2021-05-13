module AdaptiveResonance

# Usings/imports for the whole package declared once
using Parameters
using Logging
using ProgressBars
using Printf
using MLJ: confusion_matrix, coerce, OrderedFactor
using LinearAlgebra: tr, norm
using Statistics: median, mean

# Abstract types
abstract type AbstractARTOpts end
abstract type AbstractART end

# Include all files
include("common.jl")        # Objects shared by all modules
include("constants.jl")     # Global constants and references for convenience
include("ARTMAP/ARTMAP.jl") #
include("ART/ART.jl")

# Export all public names
export

    # Abstract types
    AbstractARTOpts,
    AbstractART,

    # Algorithmic functions
    train!,
    classify,
    performance,

    # Common structures
    DataConfig,
    data_setup!,

    # Common utility functions
    complement_code,
    get_data_characteristics,
    linear_normalization,
    get_data_shape,
    get_n_samples,

    # DDVFA
    DDVFA, opts_DDVFA,
    GNFA, opts_GNFA,

    # ARTMAP
    FAM, opts_FAM,
    DAM, opts_DAM,
    SFAM, opts_SFAM,

    # ARTSCENE
    color_to_gray,
    contrast_normalization,
    contrast_sensitive_oriented_filtering,
    contrast_insensitive_oriented_filtering,
    orientation_competition,
    patch_orientation_color,
    artscene_filter

end # module
