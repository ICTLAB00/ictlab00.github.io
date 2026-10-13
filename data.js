window.PORTFOLIO = {
  "journals": [
    {
      "id": "paas",
      "year": "2026",
      "type": "Manuscript",
      "topic": "Agentic AI",
      "filters": [
        "agentic",
        "generative",
        "vision"
      ],
      "title": "PAAS: Partial Autonomous Agentic System for Maximizing Computer Vision-based Construction Hazard Detection",
      "authors": "GyeongNam Kang, JungHo Jeon",
      "venue": "",
      "shortVenue": "Manuscript in preparation",
      "status": "Submission planned · Nov 2026",
      "citation": "Kang, G., & Jeon, J. (2026). “PAAS: Partial Autonomous Agentic System for Maximizing Computer Vision-based Construction Hazard Detection”. (Submission planned for November 2026)",
      "teaser": "Connecting generation, validation, training, and evaluation into an adaptive augmentation workflow.",
      "methods": [
        "Agentic AI",
        "Generative augmentation",
        "Object detection"
      ],
      "figure": "assets/paas-workflow.png",
      "figureAlt": "Framework of the partially autonomous agentic augmentation system",
      "figureCaption": "Generation, screening, annotation, training, and round decision workflow from the current manuscript.",
      "summary": "PAAS integrates baseline training, prompt selection, image generation, validity screening, quality filtering, automatic annotation, and detector training under an orchestrator. The case study compares three generation tools and three prompting strategies using fixed evaluation sets and cumulative augmentation rounds. Rejected images and failure reasons inform subsequent generation, while detection-performance histories support continuation decisions. The approach aims to make augmentation workflows repeatable with bounded agent autonomy and less manual coordination. The manuscript is in preparation; quantitative evaluation and validation across field conditions remain ongoing.",
      "figures": [
        {
          "src": "assets/paas-workflow.png",
          "caption": "Generation, screening, annotation, training, and round decision workflow.",
          "alt": "Generation, screening, annotation, training, and round decision workflow."
        }
      ]
    },
    {
      "id": "safety-signs",
      "year": "2026",
      "type": "Journal article",
      "topic": "Generative AI",
      "filters": [
        "generative"
      ],
      "title": "A generative AI framework for developing optical illusion-based construction safety signs",
      "authors": "GyeongNam Kang, JeeHee Lee, Namgyun Kim, JungHo Jeon",
      "venue": "Developments in the Built Environment, 27, 100978 (2026)",
      "shortVenue": "Developments in the Built Environment",
      "doi": "10.1016/j.dibe.2026.100978",
      "citation": "Kang, G., Lee, J., Kim, N., & Jeon, J. (2026). “A generative AI framework for developing optical illusion-based construction safety signs”. Developments in the Built Environment, 27, 100978. https://doi.org/10.1016/j.dibe.2026.100978",
      "teaser": "Combining accident context, generative images, and optical illusions to communicate construction safety.",
      "methods": [
        "Generative AI",
        "Safety communication",
        "Optical illusions"
      ],
      "figure": "assets/signs-framework.png",
      "figureAlt": "Research framework for optical illusion-based construction safety signs",
      "summary": "This study proposes a text-to-image framework for designing optical illusion-based construction safety signs. Component-level prompting and keyword analysis guide generation, followed by sign curation and survey-based evaluation for fall, struck-by, and caught-in/between hazards. Generated alternatives received higher average ratings across five perceptual dimensions, with statistically significant differences varying by hazard type and evaluation metric. The framework offers a practical route to developing safety communication materials. However, perceived improvements do not demonstrate changes in worker behavior; field testing, objective perceptual measures, and comparisons of generation tools remain necessary.",
      "figureCaption": "Research framework (Figure 1).",
      "figures": [
        {
          "src": "assets/signs-framework.png",
          "caption": "Framework for generating and evaluating optical illusion-based safety signs.",
          "alt": "Framework for generating and evaluating optical illusion-based safety signs."
        },
        {
          "src": "assets/signs-examples.png",
          "caption": "Conventional signs and top-rated generated alternatives for three construction hazards.",
          "alt": "Conventional signs and top-rated generated alternatives for three construction hazards."
        },
        {
          "src": "assets/signs-results.png",
          "caption": "Mean perceptual ratings across five safety-sign evaluation dimensions.",
          "alt": "Mean perceptual ratings across five safety-sign evaluation dimensions."
        }
      ]
    },
    {
      "id": "drowsiness",
      "year": "2026",
      "type": "Journal article",
      "topic": "Computer vision",
      "filters": [
        "generative",
        "vision"
      ],
      "title": "Enhancing Drowsiness Detection in Construction Workers Through Generative Image Data and Computer Vision",
      "authors": "GyeongNam Kang, SunAe Cho, MinJeong Kang, HyoSang Kim, JongHyeon Min, JungHo Jeon",
      "venue": "Journal of the Architectural Institute of Korea, 42(3), 349–356 (2026)",
      "shortVenue": "Journal of the Architectural Institute of Korea",
      "doi": "10.5659/JAIK.2026.42.3.349",
      "citation": "Kang, G., Cho, S., Kang, M., Kim, H., Min, J., & Jeon, J. (2026). “Enhancing Drowsiness Detection in Construction Workers Through Generative Image Data and Computer Vision”. Journal of the Architectural Institute of Korea, 42(3), 349-356. https://doi.org/10.5659/JAIK.2026.42.3.349",
      "teaser": "Evaluating generative image augmentation for computer vision-based worker drowsiness detection.",
      "methods": [
        "Data augmentation",
        "Drowsiness detection",
        "Computer vision"
      ],
      "figure": "assets/drowsiness-framework.png",
      "figureAlt": "Research framework for construction worker drowsiness detection",
      "summary": "This study combines Stable Diffusion-based image augmentation with YOLOv8 and YOLO11 to detect construction worker drowsiness. Real images from construction and non-construction settings were compared, and synthetic training images were added progressively. Construction-specific data improved detection, while augmentation raised YOLOv8 mAP@50 to 90.1%. Jobsite tests also showed improved confidence for correct awake and drowsy detections. The results support domain-aligned synthetic data as a way to strengthen proactive monitoring. The dataset was small, only two detectors were compared, and close views of faces and upper bodies limit direct application to wide-angle CCTV.",
      "figureCaption": "Research framework (Figure 1).",
      "figures": [
        {
          "src": "assets/drowsiness-framework.png",
          "caption": "Dataset development, polygon labeling, detector training, and validation.",
          "alt": "Dataset development, polygon labeling, detector training, and validation."
        },
        {
          "src": "assets/drowsiness-results.png",
          "caption": "Drowsiness detection performance across synthetic augmentation volumes.",
          "alt": "Drowsiness detection performance across synthetic augmentation volumes."
        },
        {
          "src": "assets/drowsiness-onsite.png",
          "caption": "Frame-level detection confidence during jobsite tests.",
          "alt": "Frame-level detection confidence during jobsite tests."
        }
      ]
    },
    {
      "id": "augmentation",
      "year": "2025",
      "type": "Journal article",
      "topic": "Generative AI",
      "filters": [
        "generative",
        "vision"
      ],
      "title": "Generative AI-driven data augmentation for enhanced construction hazard detection",
      "authors": "YeJun Lee, GyeongNam Kang, Jinwoo Kim, Seonghwan Yoon, JungHo Jeon",
      "venue": "Automation in Construction, 177, 106317 (2025)",
      "shortVenue": "Automation in Construction",
      "doi": "10.1016/j.autcon.2025.106317",
      "citation": "Lee, Y., Kang, G., Kim, J., Yoon, S., & Jeon, J. (2025). “Generative AI-driven data augmentation for enhanced construction hazard detection”. Automation in Construction, 177, 106317. https://doi.org/10.1016/j.autcon.2025.106317",
      "teaser": "Testing how generation tools, prompts, and synthetic data volumes affect construction hazard detection.",
      "methods": [
        "Generative augmentation",
        "Prompt design",
        "Object detection"
      ],
      "figure": "assets/augmentation-framework.png",
      "figureAlt": "Research framework for generative augmentation and construction hazard detection",
      "summary": "This study tests how generative AI tools, prompting strategies, and synthetic-data volumes affect detection of unprotected construction openings. Three generation tools and three prompting approaches were used to augment training images for YOLOv8n. Stable Diffusion with image-guided structured prompting achieved 92.5% mAP@50 with 150 synthetic images, compared with 51.6% for real images alone. The findings demonstrate the value of carefully designed augmentation and show that adding more synthetic data does not always improve performance. The small dataset, single hazard focus, and absence of field validation limit generalization.",
      "figureCaption": "Research framework (Figure 1).",
      "figures": [
        {
          "src": "assets/augmentation-framework.png",
          "caption": "Research framework: real and synthetic data development, training, and evaluation.",
          "alt": "Research framework: real and synthetic data development, training, and evaluation."
        },
        {
          "src": "assets/augmentation-examples.png",
          "caption": "Synthetic opening images produced by different tools and prompting strategies.",
          "alt": "Synthetic opening images produced by different tools and prompting strategies."
        },
        {
          "src": "assets/augmentation-results.png",
          "caption": "Detection performance across generation tools and augmentation volumes.",
          "alt": "Detection performance across generation tools and augmentation volumes."
        }
      ]
    }
  ],
  "conferences": [
    {
      "id": "kicem-2026",
      "year": "2026",
      "title": "Improving Construction Site Hazardous Object Detection Performance through Partial Autonomous Agentic AI-based Data Augmentation",
      "authors": "Kang, G., Kim, K., Cho, S., Kim, H., & Jeon, J.",
      "venue": "2026 KICEM Annual Conference",
      "status": "Presentation and publication planned · Nov 2026",
      "detail": false,
      "citation": "Kang, G., Kim, K., Cho, S., Kim, H., & Jeon, J. (2026). “Improving Construction Site Hazardous Object Detection Performance through Partial Autonomous Agentic AI-based Data Augmentation”. In Proceedings of the 2026 Annual Conference of the Korea Institute of Construction Engineering and Management. (Presentation and publication planned for November 2026)"
    },
    {
      "id": "i3ce",
      "year": "2026",
      "type": "International conference paper",
      "topic": "Agentic AI",
      "title": "LLM-Orchestrated Multi-Agent System for Data Augmentation in Construction Hazard Detection",
      "authors": "GyeongNam Kang, Kwonsik Song, HyunJung Park, JungHo Jeon",
      "venue": "ASCE International Conference on Computing in Civil Engineering (i3CE 2026)",
      "status": "Forthcoming",
      "detail": true,
      "citation": "Kang, G., Song, K., Park, H., & Jeon, J. (2026). “LLM-Orchestrated Multi-Agent System for Data Augmentation in Construction Hazard Detection”. In Proceedings of the ASCE International Conference on Computing in Civil Engineering (i3CE 2026). Reston, VA: ASCE. (forthcoming)",
      "figure": "assets/i3ce-framework.png",
      "figureAlt": "LLM-orchestrated multi-agent data augmentation framework",
      "summary": "This paper develops an LLM-driven multi-agent framework for coordinating prompt generation, synthetic image generation, screening, labeling, and detector training. A pilot study uses NanoBanana and three prompting approaches to detect unprotected floor openings with YOLOv8n. Image-guided structured prompting reached 90.1% mAP@50 at 200 synthetic images, compared with a 67.2% baseline. The workflow supports controlled comparisons and selection based on detector-performance trends rather than manual trial and error. Its evidence remains limited to one generation tool, one hazard type, a small real-image dataset, and a capped augmentation volume.",
      "methods": [
        "LLM orchestration",
        "Multi-agent systems",
        "Data augmentation"
      ],
      "figureCaption": "LLM-based multi-agent system architecture (Figure 1).",
      "figures": [
        {
          "src": "assets/i3ce-framework.png",
          "caption": "LLM-driven multi-agent architecture and performance feedback loop.",
          "alt": "LLM-driven multi-agent architecture and performance feedback loop."
        }
      ]
    },
    {
      "id": "iccepm",
      "year": "2025",
      "type": "International conference paper",
      "topic": "Vision–language models",
      "title": "Visual Reasoning for Construction Safety Monitoring",
      "authors": "GyeongNam Kang, Jeonghoon Lee, JeeHee Lee, Hyunsoo Kim, HyunJung Park, JungHo Jeon",
      "venue": "11th International Conference on Construction Engineering and Project Management (ICCEPM 2025), pp. 438–445 · November 2025",
      "award": "2025 ICCEPM Best Paper Award",
      "detail": true,
      "citation": "Kang, G., Lee, J., Lee, J., Kim, H., Park, H., & Jeon, J. (2025). “Visual Reasoning for Construction Safety Monitoring”. In International Conference on Construction Engineering and Project Management (pp. 438-445). Korea Institute of Construction Engineering and Management. (2025 ICCEPM Best Paper Award). https://doi.org/10.6106/ICCEPM.2025.0438",
      "doi": "10.6106/ICCEPM.2025.0438",
      "figure": "assets/iccepm-framework.png",
      "figureAlt": "Dialogue-based visual question answering framework for scaffold safety",
      "summary": "This study develops dialogue-oriented visual reasoning for scaffold safety assessment. Seventeen OSHA-derived rules are expressed as sequential questions, and LLaVA-1.5-7B is fine-tuned with LoRA to retain context across safety queries and form an overall safe/unsafe judgment. In the reported tests, per-question accuracy reached 74.9% and final classification accuracy reached 74.2%, compared with 56.5% and 59.3% for the baseline. The findings support context-aware reasoning beyond isolated object recognition. Validation remains limited to scaffold imagery, with broader scene diversity and more reliable reasoning needed before deployment.",
      "methods": [
        "VQA",
        "LLaVA",
        "LoRA",
        "Safety compliance"
      ],
      "figureCaption": "Research framework from the ICCEPM presentation.",
      "figures": [
        {
          "src": "assets/iccepm-framework.png",
          "caption": "Rule preparation, reasoning strategy comparison, and full-scale testing.",
          "alt": "Rule preparation, reasoning strategy comparison, and full-scale testing."
        }
      ]
    },
    {
      "id": "kicem-2025",
      "year": "2025",
      "title": "Verification of Construction Site Safety Compliance Using a VQA Model: Performance Analysis across Situational Contexts",
      "authors": "Jeong, K., Sung, J., Kang, G., Park, K., Park, H., & Jeon, J.",
      "venue": "2025 KICEM Annual Conference · November 2025 · pp. 45–46",
      "award": "2025 KICEM Annual Conference Best Paper Award",
      "detail": false,
      "citation": "Jeong, K., Sung, J., Kang, G., Park, K., Park, H., & Jeon, J. (2025). “Verification of Construction Site Safety Compliance Using a VQA Model: Performance Analysis across Situational Contexts”. In Proceedings of the 2025 Annual Conference of the Korea Institute of Construction Engineering and Management (pp. 45-46). (2025 KICEM Annual Conference Best Paper Award)."
    },
    {
      "id": "kibc-2025",
      "year": "2025",
      "title": "Multi-Class Classification of Construction Workers’ Stress States Using rPPG",
      "authors": "Sung, J., Jeong, K., Lee, Y., Kang, G., Park, H., & Jeon, J.",
      "venue": "Korea Institute of Building Construction Fall Conference · November 2025 · 25(2), 71–72",
      "award": "2025 Korea Institute of Building Construction Fall Conference Outstanding Academic Paper Award",
      "detail": false,
      "citation": "Sung, J., Jeong, K., Lee, Y., Kang, G., Park, H., & Jeon, J. (2025). “Multi-Class Classification of Construction Workers’ Stress States Using rPPG”. In Proceedings of the 2025 Fall Conference of the Korea Institute of Building Construction, 25(2) (pp. 71-72). (2025 Korea Institute of Building Construction Fall Conference Outstanding Academic Paper Award)."
    },
    {
      "id": "aik-2025",
      "year": "2025",
      "title": "Development of an AI-Based Generative Image Quality Assessment Framework for Construction Safety Management",
      "authors": "Lee, Y., Kang, G., Cho, W., Sung, J., Park, H., & Jeon, J.",
      "venue": "Architectural Institute of Korea Spring Conference · April 2025 · 45(1), 669–670",
      "detail": false,
      "citation": "Lee, Y., Kang, G., Cho, W., Sung, J., Park, H., & Jeon, J. (2025). “Development of an AI-Based Generative Image Quality Assessment Framework for Construction Safety Management”. In Proceedings of the Architectural Institute of Korea, 45(1) (pp. 669-670)."
    },
    {
      "id": "aik-regional-2024",
      "year": "2024",
      "title": "A Generative AI-Based Data Augmentation Framework for Improving Safety Helmet Detection on Construction Sites",
      "authors": "Lee, Y., Kang, G., Cho, W., Cho, S., & Jeon, J.",
      "venue": "Architectural Institute of Korea, Busan–Ulsan–Gyeongnam Chapter · December 2024 · pp. 357–358",
      "detail": false,
      "citation": "Lee, Y., Kang, G., Cho, W., Cho, S., & Jeon, J. (2024). “A Generative AI-Based Data Augmentation Framework for Improving Safety Helmet Detection on Construction Sites”. In Proceedings of the Busan-Ulsan-Gyeongnam Chapter of the Architectural Institute of Korea (pp. 357-358)."
    },
    {
      "id": "aik-2024",
      "year": "2024",
      "title": "Generative AI-Based Data Augmentation for Improving Computer Vision Hazard Identification",
      "authors": "Kang, G., Lee, Y., Cho, W., Cho, S., Yoon, S., & Jeon, J.",
      "venue": "Architectural Institute of Korea Fall Conference · October 2024 · 44(2), 1184–1187",
      "award": "2024 Architectural Institute of Korea Fall Conference Outstanding Presentation Paper Award",
      "detail": false,
      "citation": "Kang, G., Lee, Y., Cho, W., Cho, S., Yoon, S., & Jeon, J. (2024). “Generative AI-Based Data Augmentation for Improving Computer Vision Hazard Identification”. In Proceedings of the Architectural Institute of Korea, 44(2) (pp. 1184-1187). (2024 Architectural Institute of Korea Fall Conference Outstanding Presentation Paper Award)."
    }
  ],
  "awards": [
    {
      "date": "11/2025",
      "title": "2025 ICCEPM Best Paper Award"
    },
    {
      "date": "11/2025",
      "title": "2025 KICEM Annual Conference Best Paper Award"
    },
    {
      "date": "11/2025",
      "title": "Outstanding Academic Paper Award, Korea Institute of Building Construction"
    },
    {
      "date": "10/2024",
      "title": "Outstanding Presentation Paper Award, Architectural Institute of Korea"
    },
    {
      "date": "08/2024",
      "title": "Excellence Award, 9th National University Student CM Competition"
    },
    {
      "date": "05/2024",
      "title": "Excellence Award, Safety Partnership Idea Competition"
    },
    {
      "date": "08/2023",
      "title": "Participation Award, 8th National University Student CM Competition"
    },
    {
      "date": "07/2023",
      "title": "Outstanding Idea Award, Structural Seismic Design Competition"
    }
  ]
};
