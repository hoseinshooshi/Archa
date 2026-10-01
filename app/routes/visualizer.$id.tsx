import { ArrowLeft, Download, RefreshCcw, Share2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router"
import LOGOSvg from "~/components/SVGs/LOGOSvg";
import Button from "~/components/ui/Button";
import { generate3DView } from "~/lib/ai.action";
import type { Route } from "./+types/visualizer.$id";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Archa-Projects" },
    { name: "description", content: "Your Project" },
  ];
}
const VisualizerId = () => {
    const navigate = useNavigate(); 

    const location = useLocation(); 
    const {initialImage,initialRender, name} = location.state || {}; 
    const hasInitialGenerated = useRef(false); 
    const [isProcessing, setIsProcessing] = useState(false); 
    const [currentImage, setCurrentImage] = useState<string|null>(initialRender || null)
    const handleBack = () => navigate("/")
    const runGeneration = async () => {
        if(!initialImage) return; 
        try {
            setIsProcessing(true)
            const result = await generate3DView({sourceImage: initialImage}); 
            if(result.renderedImage) {
                setCurrentImage(result.renderedImage); 

            }
        } catch (error) {
            console.log("There was an error generating Image", error)
        } finally {
            setIsProcessing(false)
        }
    }

    useEffect(()=>{
        if(!initialImage || hasInitialGenerated.current) return; 
        if(initialRender) {
            setCurrentImage(initialRender)
            hasInitialGenerated.current = true
            return
        }
        hasInitialGenerated.current = true; 
        runGeneration()
    }, [initialImage, initialRender])
    return (

            <div className="visualizer">
                <nav className="topbar">
                    <div className="brand">
                        <LOGOSvg className="w-6 h-6 text-chart-1/70 hover:text-chart-1/80"/>
                        <span className="name">Archa</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={handleBack} className="exit">
                        <ArrowLeft className="icon" />Exit editor
                    </Button>
                </nav>
                <section className="content">
                    <div className="panel">
                        <div className="panel-header">
                            <div className="panel-meta">
                                <p>Project</p>
                                <h2>{`Untitled Project`}</h2>
                                <p className="note">Created By You</p>
                            </div>
                            <div className="panel-actions">
                                <Button
                                size="sm"
                                onClick={()=>{}}
                                disabled={!currentImage}
                                className="export"
                                >
                                    <Download className="w-4 h-4 mr-2"/>Export
                                </Button>
                                <Button
                                onClick={()=>{}}
                                size="sm"
                                className="share"
                                >
                                    <Share2 className="w-4 h-4 mr-2"/> Share
                                </Button>
                            </div>
                        </div>
                        <div className={`render-area ${isProcessing ? `is-processing` : '' }`}>
                            {currentImage ? (
                                <img src={currentImage} alt="Ai Render" className="render-img" />
                                ) : (
                                    <div className="render-placeholder">
                                        {initialImage && <img src={initialImage} alt="initial image" className="render-fallback"/> }
                                    </div>
                                )}
                                {isProcessing && (
                                    <div className="render-overlay">
                                        <div className="rendering-card">
                                            <RefreshCcw className="spinner"/>
                                            <span className="title">
                                                Rendering ... 
                                            </span>
                                            <span className="subtitle">
                                                Generating Visualization ... 
                                            </span>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </section>
            </div>
    )
}
export default VisualizerId