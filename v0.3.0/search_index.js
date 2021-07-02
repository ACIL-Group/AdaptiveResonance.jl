var documenterSearchIndex = {"docs":
[{"location":"man/contributing/#Contributing","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"To formally contribute to the package, please follow the usual branch pull request procedure:","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"Fork the project.\nCreate your feature branch (git checkout -b my-new-feature).\nCommit your changes (git commit -am 'Added some feature').\nPush to the branch (git push origin my-new-feature).\nCreate a new GitHub pull request.","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"If you simply have suggestions for improvement, Sasha Petrenko (<sap625@mst.edu>) is the current developer and maintainer of the AdaptiveResonance.jl package, so please feel free to reach out with thoughts and questions.","category":"page"},{"location":"man/full-index/#main-index","page":"Index","title":"Index","text":"","category":"section"},{"location":"man/full-index/","page":"Index","title":"Index","text":"Pages = [\"lib/public.md\"]","category":"page"},{"location":"man/full-index/","page":"Index","title":"Index","text":"Modules = [AdaptiveResonance]","category":"page"},{"location":"man/full-index/#AdaptiveResonance.DAM","page":"Index","title":"AdaptiveResonance.DAM","text":"DAM <: ART\n\nDefault ARTMAP struct.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.DAM-Tuple{opts_DAM}","page":"Index","title":"AdaptiveResonance.DAM","text":"DAM(opts)\n\nImplements a Default ARTMAP learner with specified options\n\nExamples\n\njulia> opts = opts_DAM()\njulia> DAM(opts)\nDAM\n    opts: opts_DAM\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.DAM-Tuple{}","page":"Index","title":"AdaptiveResonance.DAM","text":"DAM()\n\nImplements a Default ARTMAP learner.\n\nExamples\n\njulia> DAM()\nDAM\n    opts: opts_DAM\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.DDVFA","page":"Index","title":"AdaptiveResonance.DDVFA","text":"DDVFA <: ART\n\nDistributed Dual Vigilance Fuzzy ARTMAP module struct.\n\nExamples\n\njulia> DDVFA()\nDDVFA\n    opts: opts_DDVFA\n    subopts::opts_GNFA\n    ...\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.DDVFA-Tuple{opts_DDVFA}","page":"Index","title":"AdaptiveResonance.DDVFA","text":"DDVFA(opts::opts_DDVFA)\n\nImplements a DDVFA learner with specified options.\n\nExamples\n\njulia> my_opts = opts_DDVFA()\njulia> DDVFA(my_opts)\nDDVFA\n    opts: opts_DDVFA\n    subopts: opts_GNFA\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.DDVFA-Tuple{}","page":"Index","title":"AdaptiveResonance.DDVFA","text":"DDVFA()\n\nImplements a DDVFA learner with default options.\n\nExamples\n\njulia> DDVFA()\nDDVFA\n    opts: opts_DDVFA\n    subopts: opts_GNFA\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.DVFA","page":"Index","title":"AdaptiveResonance.DVFA","text":"DVFA <: ART\n\nDual Vigilance Fuzzy ARTMAP module struct.\n\nExamples\n\njulia> DVFA()\nDVFA\n    opts: opts_DVFA\n    ...\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.DVFA-Tuple{opts_DVFA}","page":"Index","title":"AdaptiveResonance.DVFA","text":"DVFA(opts::opts_DVFA)\n\nImplements a DVFA learner with specified options.\n\nExamples\n\njulia> my_opts = opts_DVFA()\njulia> DVFA(my_opts)\nDVFA\n    opts: opts_DVFA\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.DVFA-Tuple{}","page":"Index","title":"AdaptiveResonance.DVFA","text":"DVFA()\n\nImplements a DVFA learner with default options.\n\nExamples\n\njulia> DVFA()\nDVFA\n    opts: opts_DDVFA\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.DataConfig","page":"Index","title":"AdaptiveResonance.DataConfig","text":"DataConfig\n\nConatiner to standardize training/testing data configuration.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.DataConfig-Tuple{AbstractArray{T,1} where T<:Real,AbstractArray{T,1} where T<:Real}","page":"Index","title":"AdaptiveResonance.DataConfig","text":"DataConfig(mins::RealVector, maxs::RealVector)\n\nConvenience constructor for DataConfig, requiring only mins and maxs of the features.\n\nThis constructor is used when the mins and maxs differ across features. The dimension is inferred by the length of the mins and maxs.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.DataConfig-Tuple{Real,Real,Integer}","page":"Index","title":"AdaptiveResonance.DataConfig","text":"DataConfig(min::Real, max::Real, dim::Integer)\n\nConvenience constructor for DataConfig, requiring only a global min, max, and dim.\n\nThis constructor is used in the case that the feature mins and maxs are all the same respectively.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.DataConfig-Tuple{}","page":"Index","title":"AdaptiveResonance.DataConfig","text":"DataConfig()\n\nDefault constructor for a data configuration, not set up.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.FAM","page":"Index","title":"AdaptiveResonance.FAM","text":"FAM\n\nFuzzy ARTMAP struct.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.FAM-Tuple{opts_FAM}","page":"Index","title":"AdaptiveResonance.FAM","text":"FAM(opts)\n\nImplements a Fuzzy ARTMAP learner with specified options.\n\nExamples\n\njulia> opts = opts_FAM()\njulia> FAM(opts)\nFAM\n    opts: opts_FAM\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.FAM-Tuple{}","page":"Index","title":"AdaptiveResonance.FAM","text":"FAM()\n\nImplements a Fuzzy ARTMAP learner.\n\nExamples\n\njulia> FAM()\nFAM\n    opts: opts_FAM\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.GNFA","page":"Index","title":"AdaptiveResonance.GNFA","text":"GNFA <: ART\n\nGamma-Normalized Fuzzy ART learner struct\n\nExamples\n\njulia> GNFA()\nGNFA\n    opts: opts_GNFA\n    ...\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.GNFA-Tuple{opts_GNFA,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.GNFA","text":"GNFA(opts::opts_GNFA, sample::RealArray)\n\nCreate and initialize a GNFA with a single sample in one step.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.GNFA-Tuple{opts_GNFA}","page":"Index","title":"AdaptiveResonance.GNFA","text":"GNFA(opts::opts_GNFA)\n\nImplements a Gamma-Normalized Fuzzy ART learner with specified options.\n\nExamples\n\njulia> GNFA(opts)\nGNFA\n    opts: opts_GNFA\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.GNFA-Tuple{}","page":"Index","title":"AdaptiveResonance.GNFA","text":"GNFA()\n\nImplements a Gamma-Normalized Fuzzy ART learner.\n\nExamples\n\njulia> GNFA()\nGNFA\n    opts: opts_GNFA\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.SFAM","page":"Index","title":"AdaptiveResonance.SFAM","text":"SFAM\n\nSimple Fuzzy ARTMAP struct.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.SFAM-Tuple{opts_SFAM}","page":"Index","title":"AdaptiveResonance.SFAM","text":"SFAM(opts)\n\nImplements a Simple Fuzzy ARTMAP learner with specified options.\n\nExamples\n\njulia> opts = opts_SFAM()\njulia> SFAM(opts)\nSFAM\n    opts: opts_SFAM\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.SFAM-Tuple{}","page":"Index","title":"AdaptiveResonance.SFAM","text":"SFAM()\n\nImplements a Simple Fuzzy ARTMAP learner.\n\nExamples\n\njulia> SFAM()\nSFAM\n    opts: opts_SFAM\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.opts_DAM","page":"Index","title":"AdaptiveResonance.opts_DAM","text":"opts_DAM()\n\nImplements a Default ARTMAP learner's options.\n\nExamples\n\njulia> my_opts = opts_DAM()\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.opts_DDVFA","page":"Index","title":"AdaptiveResonance.opts_DDVFA","text":"opts_DDVFA()\n\nDistributed Dual Vigilance Fuzzy ART options struct.\n\nExamples\n\njulia> my_opts = opts_DDVFA()\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.opts_DVFA","page":"Index","title":"AdaptiveResonance.opts_DVFA","text":"opts_DVFA()\n\nDual Vigilance Fuzzy ART options struct.\n\nExamples\n\njulia> my_opts = opts_DVFA()\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.opts_FAM","page":"Index","title":"AdaptiveResonance.opts_FAM","text":"opts_FAM()\n\nImplements a Fuzzy ARTMAP learner's options.\n\nExamples\n\njulia> my_opts = opts_FAM()\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.opts_GNFA","page":"Index","title":"AdaptiveResonance.opts_GNFA","text":"opts_GNFA()\n\nGamma-Normalized Fuzzy ART options struct.\n\nExamples\n\njulia> opts_GNFA()\nInitialized GNFA\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.opts_SFAM","page":"Index","title":"AdaptiveResonance.opts_SFAM","text":"opts_SFAM()\n\nImplements a Simple Fuzzy ARTMAP learner's options.\n\nExamples\n\njulia> my_opts = opts_SFAM()\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.activation-Tuple{DAM,AbstractArray{T,1} where T<:Real,AbstractArray{T,1} where T<:Real}","page":"Index","title":"AdaptiveResonance.activation","text":"activation(art::DAM, x::RealVector, W::RealVector)\n\nDefault ARTMAP's choice-by-difference activation function.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.activation-Tuple{SFAM,AbstractArray{T,1} where T<:Real,AbstractArray{T,1} where T<:Real}","page":"Index","title":"AdaptiveResonance.activation","text":"activation(art::SFAM, x::RealVector, W::RealVector)\n\nReturns the activation value of the Simple Fuzzy ARTMAP module with weight W and sample x.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.activation_match!-Tuple{DVFA,AbstractArray{T,1} where T<:Real}","page":"Index","title":"AdaptiveResonance.activation_match!","text":"activation_match!(art::DVFA, x::RealVector)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.activation_match!-Tuple{GNFA,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.activation_match!","text":"activation_match!(art::GNFA, x::RealArray)\n\nComputes the activation and match functions of the art module against sample x.\n\nExamples\n\njulia> my_GNFA = GNFA()\nGNFA\n    opts: opts_GNFA\n    ...\njulia> x, y = load_data()\njulia> train!(my_GNFA, x)\njulia> x_sample = x[:, 1]\njulia> activation_match!(my_GNFA, x_sample)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.art_match-Tuple{DAM,AbstractArray{T,1} where T<:Real,AbstractArray{T,1} where T<:Real}","page":"Index","title":"AdaptiveResonance.art_match","text":"art_match(art::DAM, x::RealVector, W::RealVector)\n\nReturns the match function for the Default ARTMAP module with weight W and sample x.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.art_match-Tuple{SFAM,AbstractArray{T,1} where T<:Real,AbstractArray{T,1} where T<:Real}","page":"Index","title":"AdaptiveResonance.art_match","text":"art_match(art::SFAM, x::RealVector, W::RealVector)\n\nReturns the match function for the Simple Fuzzy ARTMAP module with weight W and sample x.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.artscene_filter-Union{Tuple{Array{T,3}}, Tuple{T}} where T<:Real","page":"Index","title":"AdaptiveResonance.artscene_filter","text":"artscene_filter(raw_image::Array{T, 3} ;  distributed::Bool=true) where {T<:Real}\n\nProcess the full artscene filter toolchain on an image.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.classify-Tuple{DAM,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.classify","text":"classify(art::DAM, x::RealArray ; preprocessed::Bool=false)\n\nCategorize data 'x' using a trained Default ARTMAP module 'art'.\n\nExamples\n\njulia> x, y = load_data()\njulia> x_test, y_test = load_test_data()\njulia> art = DAM()\nDAM\n    opts: opts_DAM\n    ...\njulia> train!(art, x, y)\njulia> classify(art, x_test)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.classify-Tuple{DDVFA,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.classify","text":"classify(art::DDVFA, x::RealArray ; preprocessed::Bool=false, get_bmu::Bool=false)\n\nPredict categories of 'x' using the DDVFA model.\n\nReturns predicted categories 'y_hat.'\n\nExamples\n\njulia> my_DDVFA = DDVFA()\nDDVFA\n    opts: opts_DDVFA\n    ...\njulia> x, y = load_data()\njulia> train!(my_DDVFA, x)\njulia> y_hat = classify(my_DDVFA, y)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.classify-Tuple{DVFA,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.classify","text":"classify(art::DVFA, x::RealArray)\n\nPredict categories of 'x' using the DVFA model.\n\nReturns predicted categories 'y_hat'\n\nExamples\n\njulia> my_DVFA = DVFA()\nDVFA\n    opts: opts_DVFA\n    ...\njulia> x, y = load_data()\njulia> train!(my_DVFA, x)\njulia> y_hat = classify(my_DVFA, y)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.classify-Tuple{GNFA,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.classify","text":"classify(art::GNFA, x::RealArray)\n\nPredict categories of 'x' using the GNFA model.\n\nReturns predicted categories 'y_hat'\n\nExamples\n\njulia> my_GNFA = GNFA()\nGNFA\n    opts: opts_GNFA\n    ...\njulia> x, y = load_data()\njulia> train!(my_GNFA, x)\njulia> y_hat = classify(my_GNFA, y)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.classify-Tuple{SFAM,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.classify","text":"classify(art::SFAM, x::RealArray ; preprocessed::Bool=false)\n\nCategorize data 'x' using a trained Simple Fuzzy ARTMAP module 'art'.\n\nExamples\n\njulia> x, y = load_data()\njulia> x_test, y_test = load_test_data()\njulia> art = SFAM()\nSFAM\n    opts: opts_SFAM\n    ...\njulia> train!(art, x, y)\njulia> classify(art, x_test)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.color_to_gray-Tuple{AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.color_to_gray","text":"color_to_gray(image::RealArray)\n\nARTSCENE Stage 1: Color-to-gray image transformation.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.competition_kernel-Tuple{Integer,Integer}","page":"Index","title":"AdaptiveResonance.competition_kernel","text":"competition_kernel(l::Integer, k::Integer ; sign::String=\"plus\")\n\nCompetition kernel for ARTSCENE: Stage 5.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.complement_code-Tuple{AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.complement_code","text":"complement_code(data::RealArray ; config::DataConfig=DataConfig())\n\nNormalize the data x to [0, 1] and returns the augmented vector [x, 1 - x].\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.contrast_insensitive_oriented_filtering-Tuple{AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.contrast_insensitive_oriented_filtering","text":"contrast_insensitive_oriented_filtering(y::RealArray)\n\nARTSCENE Stage 4: Contrast-insensitive oriented filtering.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.contrast_normalization-Tuple{AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.contrast_normalization","text":"contrast_normalization(image::RealArray ; distributed::Bool=true)\n\nARTSCENE Stage 2: Constrast normalization.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.contrast_sensitive_oriented_filtering-Tuple{AbstractArray{T,N} where N where T<:Real,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.contrast_sensitive_oriented_filtering","text":"contrast_sensitive_oriented_filtering(image::RealArray, x::RealArray ; distributed::Bool=true)\n\nARTSCENE Stage 3: Contrast-sensitive oriented filtering.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.create_category-Tuple{DDVFA,AbstractArray{T,1} where T<:Real,Integer}","page":"Index","title":"AdaptiveResonance.create_category","text":"create_category(art::DDVFA, sample::RealVector, label::Integer)\n\nCreate a new category by appending and initializing a new GNFA node to F2.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.data_setup!-Tuple{DataConfig,AbstractArray{T,2} where T<:Real}","page":"Index","title":"AdaptiveResonance.data_setup!","text":"data_setup!(config::DataConfig, data::RealMatrix)\n\nSets up the data config for the ART module before training.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.ddt_x-Tuple{AbstractArray{T,N} where N where T<:Real,AbstractArray{T,N} where N where T<:Real,AbstractArray{T,N} where N where T<:Real,Bool}","page":"Index","title":"AdaptiveResonance.ddt_x","text":"ddt_x(x::RealArray, image::RealArray, sigma_s::RealArray, distributed::Bool)\n\nTime rate of change of LGN network (ARTSCENE Stage 2).\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.ddt_y-Tuple{AbstractArray{T,N} where N where T<:Real,AbstractArray{T,N} where N where T<:Real,AbstractArray{T,N} where N where T<:Real,Real,Bool}","page":"Index","title":"AdaptiveResonance.ddt_y","text":"ddt_y(y::RealArray, X_plus::RealArray, X_minus::RealArray, alpha::Real, distributed::Bool)\n\nShunting equation for ARTSCENE Stage 3.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.ddt_z-Tuple{AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.ddt_z","text":"ddt_z(z::RealArray ; distributed=true)\n\nTime rate of change for ARTSCENE: Stage 5.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.element_min-Tuple{AbstractArray{T,1} where T<:Real,AbstractArray{T,1} where T<:Real}","page":"Index","title":"AdaptiveResonance.element_min","text":"element_min(x::RealVector, W::RealVector)\n\nReturns the element-wise minimum between sample x and weight W.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.get_data_characteristics-Tuple{AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.get_data_characteristics","text":"get_data_characteristics(data::RealArray ; config::DataConfig=DataConfig())\n\nGet the characteristics of the data, taking account if a data config is passed.\n\nIf no DataConfig is passed, then the data characteristics come from the array itself. Otherwise, use the config for the statistics of the data and the data array for the number of samples.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.get_data_shape-Tuple{AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.get_data_shape","text":"get_data_shape(data::RealArray)\n\nReturns the correct feature dimension and number of samples.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.get_iterator-Tuple{ARTOpts,Array}","page":"Index","title":"AdaptiveResonance.get_iterator","text":"get_iterator(opts::ARTOpts, x::Array)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.get_n_samples-Tuple{AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.get_n_samples","text":"get_n_samples(data::RealArray)\n\nReturns the number of samples, accounting for 1-D and 2-D arrays.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.get_sample-Tuple{AbstractArray{T,N} where N where T<:Real,Integer}","page":"Index","title":"AdaptiveResonance.get_sample","text":"get_sample(x::RealArray, i::Integer)\n\nReturns a sample from data array x safely, accounting for 1-D and\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.initialize!-Tuple{GNFA,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.initialize!","text":"initialize!(art::GNFA, x::Array)\n\nInitializes a GNFA learner with an intial sample 'x'.\n\nExamples\n\njulia> my_GNFA = GNFA()\nGNFA\n    opts: opts_GNFA\n    ...\njulia> initialize!(my_GNFA, [1 2 3 4])\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.learn!-Tuple{DVFA,AbstractArray{T,1} where T<:Real,Integer}","page":"Index","title":"AdaptiveResonance.learn!","text":"learn!(art::DVFA, x::RealVector, index::Integer)\n\nIn place learning function.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.learn!-Tuple{GNFA,AbstractArray{T,1} where T<:Real,Integer}","page":"Index","title":"AdaptiveResonance.learn!","text":"learn!(art::GNFA, x::RealVector, index::Integer)\n\nIn place learning function with instance counting.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.learn-Tuple{DAM,AbstractArray{T,1} where T<:Real,AbstractArray{T,1} where T<:Real}","page":"Index","title":"AdaptiveResonance.learn","text":"learn(art::DAM, x::RealVector, W::RealVector)\n\nReturns a single updated weight for the Simple Fuzzy ARTMAP module for weight vector W and sample x.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.learn-Tuple{DVFA,AbstractArray{T,1} where T<:Real,AbstractArray{T,1} where T<:Real}","page":"Index","title":"AdaptiveResonance.learn","text":"learn(art::DVFA, x::RealVector, W::RealVector)\n\nReturn the modified weight of the art module conditioned by sample x.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.learn-Tuple{GNFA,AbstractArray{T,1} where T<:Real,AbstractArray{T,1} where T<:Real}","page":"Index","title":"AdaptiveResonance.learn","text":"learn(art::GNFA, x::RealVector, W::RealVector)\n\nReturn the modified weight of the art module conditioned by sample x.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.learn-Tuple{SFAM,AbstractArray{T,1} where T<:Real,AbstractArray{T,1} where T<:Real}","page":"Index","title":"AdaptiveResonance.learn","text":"learn(art::SFAM, x::RealVector, W::RealVector)\n\nReturns a single updated weight for the Simple Fuzzy ARTMAP module for weight vector W and sample x.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.linear_normalization-Tuple{AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.linear_normalization","text":"linear_normalization(data::RealArray ; config::DataConfig=DataConfig())\n\nNormalize the data to the range [0, 1] along each feature.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.orientation_competition-Tuple{AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.orientation_competition","text":"orientation_competition(z::RealArray)\n\nARTSCENE Stage 5: Orientation competition at the same position.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.oriented_kernel-Tuple{Integer,Integer,Integer,Integer,Integer,Real,Real}","page":"Index","title":"AdaptiveResonance.oriented_kernel","text":"oriented_kernel(i::Integer, j::Integer, p::Integer, q::Integer, k::Integer, sigma_h::Real, sigma_v::Real ; sign::String=\"plus\")\n\nOriented, elongated, spatially offset kernel G for ARTSCENE Stage 3.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.patch_orientation_color-Tuple{AbstractArray{T,N} where N where T<:Real,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.patch_orientation_color","text":"patch_orientation_color(z::RealArray, image::RealArray)\n\nARTSCENE Stage 6: Create patch feature vectors.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.performance-Tuple{AbstractArray{T,1} where T<:Integer,AbstractArray{T,1} where T<:Integer}","page":"Index","title":"AdaptiveResonance.performance","text":"performance(y_hat::IntegerVector, y::IntegerVector)\n\nReturns the categorization performance of y_hat against y.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.similarity-Tuple{String,GNFA,String,AbstractArray{T,1} where T<:Real,Union{Float32, Float64}}","page":"Index","title":"AdaptiveResonance.similarity","text":"similarity(method::String, F2::GNFA, field_name::String, sample::RealVector, gamma_ref::RealFP)\n\nCompute the similarity metric depending on method with explicit comparisons for the field name.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.stopping_conditions-Tuple{DAM}","page":"Index","title":"AdaptiveResonance.stopping_conditions","text":"stopping_conditions(art::DAM)\n\nStopping conditions for Default ARTMAP, checked at the end of every epoch.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.stopping_conditions-Tuple{DDVFA}","page":"Index","title":"AdaptiveResonance.stopping_conditions","text":"stopping_conditions(art::DDVFA)\n\nStopping conditions for Distributed Dual Vigilance Fuzzy ARTMAP.\n\nReturns true if there is no change in weights during the epoch or the maxmimum epochs has been reached.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.stopping_conditions-Tuple{DVFA}","page":"Index","title":"AdaptiveResonance.stopping_conditions","text":"stopping_conditions(art::DVFA)\n\nStopping conditions for a DVFA module.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.stopping_conditions-Tuple{GNFA}","page":"Index","title":"AdaptiveResonance.stopping_conditions","text":"stopping_conditions(art::GNFA)\n\nStopping conditions for a GNFA module.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.stopping_conditions-Tuple{SFAM}","page":"Index","title":"AdaptiveResonance.stopping_conditions","text":"stopping_conditions(art::SFAM)\n\nStopping conditions for Simple Fuzzy ARTMAP, checked at the end of every epoch.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.surround_kernel-NTuple{5,Integer}","page":"Index","title":"AdaptiveResonance.surround_kernel","text":"surround_kernel(i::Integer, j::Integer, p::Integer, q::Integer, scale::Integer)\n\nSurround kernel S function for ARTSCENE Stage 2\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.train!-Tuple{DAM,AbstractArray{T,N} where N where T<:Real,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.train!","text":"train!(art::DAM, x::RealArray, y::RealArray ; preprocessed::Bool=false)\n\nTrains a Default ARTMAP learner in a supervised manner.\n\nExamples\n\njulia> x, y = load_data()\njulia> art = DAM()\nDAM\n    opts: opts_DAM\n    ...\njulia> train!(art, x, y)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.train!-Tuple{DDVFA,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.train!","text":"train!(art::DDVFA, x::RealArray ; y::IntegerVector=[], preprocessed::Bool=false)\n\nTrain the DDVFA model on the data.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.train!-Tuple{DVFA,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.train!","text":"train!(art::DVFA, x::RealArray ; y::IntegerVector = [], preprocessed::Bool=false)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.train!-Tuple{GNFA,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.train!","text":"train!(art::GNFA, x::RealArray ; y::IntegerVector=[])\n\nTrains a GNFA learner with dataset 'x' and optional labels 'y'\n\nExamples\n\njulia> my_GNFA = GNFA()\nGNFA\n    opts: opts_GNFA\n    ...\njulia> x = load_data()\njulia> train!(my_GNFA, x)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.train!-Tuple{SFAM,AbstractArray{T,N} where N where T<:Real,AbstractArray{T,N} where N where T<:Real}","page":"Index","title":"AdaptiveResonance.train!","text":"train!(art::SFAM, x::RealArray, y::RealArray ; preprocessed::Bool=false)\n\nTrains a Simple Fuzzy ARTMAP learner in a supervised manner.\n\nExamples\n\njulia> x, y = load_data()\njulia> art = SFAM()\nSFAM\n    opts: opts_SFAM\n    ...\njulia> train!(art, x, y)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.update_iter-Tuple{ART,Union{ProgressBars.ProgressBar, UnitRange},Int64}","page":"Index","title":"AdaptiveResonance.update_iter","text":"update_iter(art::ART, iter::Union{UnitRange, ProgressBar}, i::Int)\n\n\n\n\n\n","category":"method"},{"location":"man/guide/#Package-Guide","page":"Guide","title":"Package Guide","text":"","category":"section"},{"location":"man/guide/#Installation","page":"Guide","title":"Installation","text":"","category":"section"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"The AdaptiveResonance package can be installed using the Julia package manager. From the Julia REPL, type ']' to enter the Pkg REPL mode and run","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"pkg> add AdaptiveResonance","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"Alternatively, it can be added to/ your environment in a script with","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"using Pkg\nPkg.add(\"AdaptiveResonance\")","category":"page"},{"location":"man/guide/#Usage","page":"Guide","title":"Usage","text":"","category":"section"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"The AdaptiveResonance package is built upon ART modules that contain all of the state information during training and inference. The ART modules are driven by options, which are themselves mutable keyword argument structs from the Parameters.jl package.","category":"page"},{"location":"man/guide/#ART","page":"Guide","title":"ART","text":"","category":"section"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"ART modules are generally unsupervised in formulation, so they do not explicitly require supervisory labels to their training examples. However, many of these modules can be formulated in the simplified ARTMAP style whereby the ART B module has a vigilance parameter of 1, directly mapping the categories of the ART A module to any provided supervisory labels. Without provided labels, the ART modules behave as expected, incrementally creating categories when necessary during the training phase.","category":"page"},{"location":"man/guide/#ART-Modules","page":"Guide","title":"ART Modules","text":"","category":"section"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"Every ART module is equipped with several constructors, a training function, and a classification function. Each ART module","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"","category":"page"},{"location":"man/guide/#ART-Options","page":"Guide","title":"ART Options","text":"","category":"section"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"The AdaptiveResonance package is designed for maximum flexibility for scientific research, even though this may come at the cost of learning instability if misused. Because of the diversity of ART modules, the package is structured around instantiating separate modules and using them for training and inference. Due to this diversity, each module has its own options struct with keyword arguments. These options have default values driven by standards in their respective literatures, so the ART modules may be used immediately without any customization. Furthermore, these options are mutable, so they may be modified before module instantiation, before training, or even after training.","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"For example, you can get going with the default options by creating an ART module with the default constructor:","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"my_art = DDVFA()","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"If you want to change the parameters before construction, you can create an options struct, modify it, then instantiate your ART module with it:","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"my_art_opts = opts_DDVFA()\nmy_art_opts.gamma = 3\nmy_art = DDVFA(my_art_opts)","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"The options are objects from the Parameters.jl project, so they can be instantiated even with keyword arguments:","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"my_art_opts = opts_DDVFA(gamma = 3)","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"You can even modify the parameters on the fly after the ART module has been instantiated by directly modifying the options within the module:","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"my_art = DDVFA()\nmy_art.opts.gamma = 3","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"note: Note\nYou must be careful when changing option values during or after training, as it may result in some undefined behavior. Modify the ART module options after instantiation at your own risk and discretion.","category":"page"},{"location":"man/examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"man/examples/","page":"Examples","title":"Examples","text":"There are examples for every structure in the package within the package's examples/ folder. The code for several of these examples is provided here.","category":"page"},{"location":"man/examples/#ART","page":"Examples","title":"ART","text":"","category":"section"},{"location":"man/examples/","page":"Examples","title":"Examples","text":"All ART modules learn in an unsupervised (i.e. clustering) mode by default, but they all can accept labels in the simplified ARTMAP fashion.","category":"page"},{"location":"man/examples/#Distributed-Dual-Vigilance-Fuzzy-ART-(DDVFA)","page":"Examples","title":"Distributed Dual Vigilance Fuzzy ART (DDVFA)","text":"","category":"section"},{"location":"man/examples/","page":"Examples","title":"Examples","text":"art = DDVFA()","category":"page"},{"location":"man/examples/#ARTMAP","page":"Examples","title":"ARTMAP","text":"","category":"section"},{"location":"man/examples/#Simplified-Fuzzy-ARTMAP-(SFAM)","page":"Examples","title":"Simplified Fuzzy ARTMAP (SFAM)","text":"","category":"section"},{"location":"man/examples/","page":"Examples","title":"Examples","text":"art = SFAM()","category":"page"},{"location":"#AdaptiveResonance.jl","page":"Home","title":"AdaptiveResonance.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"These pages serve as the official documentation for the AdaptiveResonance.jl Julia package.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Adaptive Resonance Theory (ART) began as a neurocognitive theory of how fields of cells can continuously learn stable representations, and it evolved into the basis for a myriad of practical machine learning algorithms. Pioneered by Stephen Grossberg and Gail Carpenter, the field has had contributions across many years and from many disciplines, resulting in a plethora of engineering applications and theoretical advancements that have enabled ART-based algorithms to compete with many other modern learning and clustering algorithms.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The purpose of this package is to provide a home for the development and use of these ART-based machine learning algorithms.","category":"page"},{"location":"","page":"Home","title":"Home","text":"See the Index for the complete list of documented functions and types.","category":"page"},{"location":"#Manual-Outline","page":"Home","title":"Manual Outline","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This documentation is split into the following sections:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"man/guide.md\",\n    \"man/examples.md\",\n    \"man/contributing.md\",\n    \"man/full-index.md\",\n]\nDepth = 1","category":"page"},{"location":"","page":"Home","title":"Home","text":"The Package Guide provides a tutorial to the full usage of the package, while Examples gives sample workflows using a variety of ART modules.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Instructions on how to contribute to the package are found in Contributing, and docstrings for every element of the package is listed in the Index.","category":"page"}]
}
